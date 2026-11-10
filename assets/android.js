/* FINAGRO — página /android: lê os dados da versão atual (latest.json, no Worker do APK) na hora da visita e atualiza
   versão, tamanho, data, novidades e impressão SHA-256. O que estiver no HTML é reserva verdadeira: se a leitura falhar,
   der 404 ou vier sem um campo, aquele campo fica como está; nada quebra, nada muda de lugar e nenhum número é inventado. */
(function () {
  'use strict';
  var bloco = document.getElementById('apk-dados');
  if (!bloco) return;
  var enderecos;
  try { enderecos = JSON.parse(bloco.textContent); } catch (e) { return; }
  if (!enderecos.dados) return;

  var todos = function (nome) { return [].slice.call(document.querySelectorAll('[data-apk="' + nome + '"]')); };
  var escrever = function (nome, texto) { todos(nome).forEach(function (el) { el.textContent = texto; }); };

  function dataPorExtenso(iso) {
    var d = new Date(iso);
    if (isNaN(d.getTime())) return '';
    return d.toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'America/Sao_Paulo' });
  }

  function aplicar(d) {
    if (!d || typeof d !== 'object') return;

    var versao = typeof d.versao === 'string' ? d.versao.trim() : '';
    if (/^\d+(\.\d+)*$/.test(versao)) {
      escrever('versao', versao);
      escrever('versao-rotulo', 'versão');
      escrever('versao-selo', 'Versão ' + versao);
    }

    var bytes = Number(d.tamanhoBytes);
    if (isFinite(bytes) && bytes > 0) {
      // A mesma conta da reserva gerada no HTML (scripts/gerar.mjs): bytes / 1.048.576, para baixo. Com o mesmo arquivo,
      // o número não muda quando a leitura chega.
      escrever('tamanho', Math.max(1, Math.floor(bytes / 1048576)) + ' MB');
      escrever('tamanho-rotulo', 'tamanho');
    }

    var publicado = d.publicadoEm ? dataPorExtenso(d.publicadoEm) : '';
    if (publicado) escrever('data', 'Publicada em ' + publicado);

    if (Array.isArray(d.novidades)) {
      var novidades = d.novidades.filter(function (n) { return typeof n === 'string' && n.trim(); });
      var modelo = todos('novidades')[0];
      if (novidades.length && modelo && modelo.firstElementChild) {
        var item = modelo.firstElementChild.cloneNode(true);
        modelo.textContent = '';
        modelo.classList.remove('apk-novidades--reserva');
        novidades.forEach(function (n) {
          var li = item.cloneNode(true);
          li.querySelector('span').textContent = n.trim();
          modelo.appendChild(li);
        });
      }
    }

    var sha = typeof d.sha256 === 'string' ? d.sha256.trim() : '';
    if (/^[0-9a-f]{64}$/i.test(sha)) {
      // a cada 8 caracteres um ponto de quebra (<wbr>), como o HTML gerado: a cópia sai inteira e a linha não sobra com 1 caractere
      todos('sha256').forEach(function (el) {
        el.textContent = '';
        sha.toLowerCase().match(/.{1,8}/g).forEach(function (pedaco, i) {
          if (i) el.appendChild(document.createElement('wbr'));
          el.appendChild(document.createTextNode(pedaco));
        });
        el.classList.add('apk-hash--real');
      });
    }
  }

  fetch(enderecos.dados, { cache: 'no-store', mode: 'cors', credentials: 'omit' })
    .then(function (r) { if (!r.ok) throw new Error('sem dados'); return r.json(); })
    .then(aplicar)
    .catch(function () { /* reserva do HTML fica no lugar */ });
})();

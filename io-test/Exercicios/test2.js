const sinon = require('sinon');
const { expect } = require('chai');
const writeFile = require('./writeFile');
const fs = require('fs');

const CONTEUDO_DO_ARQUIVO = 'Teste de conteúdo do arquivo.';
const NOME_DO_ARQUIVO = 'arquivo.txt';

describe('Roda a função writeFile', () => {

  before(() => {
    sinon.stub(fs, 'writeFileSync');
  });

  after(() => {
    fs.writeFileSync.restore();
  })

  describe('verifica se a resposta', () => {
    it('é uma string', () => {
      const resposta = writeFile(NOME_DO_ARQUIVO, CONTEUDO_DO_ARQUIVO);
      expect(resposta).to.be.a('string');
    });
    it('é igual a "ok"', () => {
      const resposta = writeFile(NOME_DO_ARQUIVO, CONTEUDO_DO_ARQUIVO);
      expect(resposta).to.be.equal('ok');
    });
  });
});
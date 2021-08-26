const sinon = require('sinon');
const { expect } = require('chai');
const positivoNegativoNeutro = require('./positivoNegativoNeutro');

// Exercício 1

describe('positivoNegativoNeutro', () => {
  describe('Teste se o retorno é', () => {
    it('uma string', () => {
      const resposta = positivoNegativoNeutro(2);
      expect(resposta).to.be.a('string');
    });
  });
  describe('Testa o retorno quando o número passado é', () => {
    it('positivo', () => {
      const resposta = positivoNegativoNeutro(2);
      expect(resposta).to.be.equal('positivo');
    });
    it('negativo', () => {
      const resposta = positivoNegativoNeutro(-2);
      expect(resposta).to.be.equal('negativo');
    });
    it('zero', () => {
      const resposta = positivoNegativoNeutro(0);
      expect(resposta).to.be.equal('neutro');
    });
  });
  describe('Testa o retorno quando o parâmetro passado', () => {
    it('é uma string', () => {
      const resposta = positivoNegativoNeutro('xablau');
      expect(resposta).to.be.equal('o valor deve ser um número');
    })
  })
})
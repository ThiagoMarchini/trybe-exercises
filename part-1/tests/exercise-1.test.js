// A função sum(a, b) retorna a soma do parâmetro a com o b
// Teste se o retorno de sum(4, 5) é 9
// Teste se o retorno de sum(0, 0) é 0
// Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
// Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")

// sum.test.js
const sum = require('../exercise-1.js');

describe('Teste de soma', () => {
  test('4 + 5 = 9', () => {
    expect(sum(4, 5)).toEqual(9);
  });

  test('0 + 0 = 0', () => {
    expect(sum(0, 0)).toEqual(0);
  });

  it('should throw an error', () => {
    expect(
      () => sum(4, '5') // Do not simply call func
    ).toThrow();
  });

  it('should throw an error', () => {
    expect(
      () => sum(4, '5')
    ).toThrowError('parameters must be numbers');
  });
});
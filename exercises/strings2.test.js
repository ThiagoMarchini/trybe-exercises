// Utilizando as mesmas funções do exercício anterior, repita a implementação para a primeira função. Após repetir a implementação, restaure a implementação original e crie os testes necessários para validar.

const strings = require('./strings');

describe('Testing mock implementation and return to original', () => {
  test('Changing implementation of stringToUppercase to lowercase', () => {
    strings.stringToUppercase = jest
      .spyOn(strings, "stringToUppercase")
      .mockImplementation((string) => string.toLowerCase());
    
    expect(strings.stringToUppercase('TEste')).toBe('teste');
  });

  test('Returning to original implementation', () => {
    strings.stringToUppercase.mockRestore();

    expect(strings.stringToUppercase('TEste')).toBe('TESTE');
  });
})
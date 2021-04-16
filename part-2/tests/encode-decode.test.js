// Teste se encode e decode são funções;
// Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;
// Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u , respectivamente;
// Teste se as demais letras/números não são convertidos para cada caso;
// Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.

const encode = require('../encode');
const decode = require('../decode');

describe('Encode/decode tests', () => {
  test('Verifica se encode é uma função', () => {
    expect(typeof (encode)).toEqual('function');
  });
  test('Verifica se decode é uma função', () => {
    expect(typeof (decode)).toEqual('function');
  });
  test('Verifica a conversão de vogais em números', () => {
    expect(encode('aeiou')).toEqual('12345');
  });
  test('Verifica a conversão de números em vogais', () => {
    expect(decode('12345')).toEqual('aeiou');
  });
  test('Verifica se as demais letras não sao convertidas', () => {
    expect(encode('bcdfghjklmnpqrstvwxyz')).toEqual('bcdfghjklmnpqrstvwxyz');
  });
  test('Verifica se as demais letras não são decodificadas', () => {
    expect(decode('bcdfghjklmnpqrstvwxyz')).toEqual('bcdfghjklmnpqrstvwxyz');
  });
  test('Verifica se a string passada e a string retornada tem o mesmo número de caracteres', () => {
    expect(decode('bcdfghjklmnpqrstvwxyz').length).toEqual('bcdfghjklmnpqrstvwxyz'.length);
  });
  test('Verifica se a string passada e a string retornada tem o mesmo número de caracteres', () => {
    expect(encode('bcdfghjklmnpqrstvwxyz').length).toEqual('bcdfghjklmnpqrstvwxyz'.length);
  });
});
// A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array
// Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
// Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
// Verifique se o array passado por parâmetro não sofreu alterações
// Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado

const myRemove = require('../exercise-2.js');

describe('Teste de remoção de elementos', () => {
  test('Retorno esperado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  test('Remoção de elemento', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2,3, 4]);
  });
  test('Verificação de modificação do parâmetro', () => {
    const array = [1, 2, 3, 4];
    myRemove(array, 3);
    expect(array).toEqual([1, 2, 3, 4]);
  });
  test('Verificação de não alteração de elemento que não consta do array', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});
const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

// A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o próprio array sem o elemento item caso ele exista no array
const expected = myRemoveWithoutCopy([1, 2, 3, 4], 3);

// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
// assert.deepStrictEqual(expected, [1, 2, 4], 'O retorno não foi o esperado');

// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
// assert.notDeepStrictEqual(expected, [1, 2, 3, 4], 'Ops, o retorno foi o array inicial');

// Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações
// const parameter = [3, 4, 5, 6];
// myRemoveWithoutCopy(parameter, 5);
// assert.notDeepStrictEqual(parameter, [3, 4, 5, 6], "O array original não foi modificado!");

// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado
// const lastExpected = myRemoveWithoutCopy([1, 2, 3, 4], 5);
// assert.deepStrictEqual(lastExpected, [1, 2, 3, 4], 'Ops, o retorno não foi o esperado;')
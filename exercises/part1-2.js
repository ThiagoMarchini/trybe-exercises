const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array

// Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
// const expected = myRemove([1, 2, 3, 4], 3);
// assert.deepStrictEqual(expected, [1, 2, 4], 'O esperado era: [1, 2, 4]');

// Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
// const expected = myRemove([1, 2, 3, 4], 3);
// assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4], 'OK, o item foi removido!')

// Verifique se o array passado por parâmetro não sofreu alterações
// const parameter = [1, 2, 3, 4];
// myRemove(parameter, 2);
// assert.deepStrictEqual(parameter, [1, 2, 3, 4], 'O array original sofreu alteração!');

// Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
// assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4], 'O resultado é diferente de [1, 2, 3, 4]');
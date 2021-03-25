const assert = require('assert');
// escreva a função findTheNeedle aqui
// retorna o índice em que a palavra está, ou -1 se não encontrado
const findTheNeedle = (array, word) => {
  const searchWord = word;
  const searchArray = array;
  for(let index = 0; index < searchArray.length; index += 1) {
    if (searchWord === searchArray[index]) {
      return index;
    } else {
      return -1;
    }
  }
}

let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);
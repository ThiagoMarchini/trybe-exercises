const assert = require('assert');
// escreva a função wordLengths aqui
const wordLengths = (array) => {
  const returnLength = [];
  for (let word of array) {
    let length = word.length;
    returnLength.push(length);
  }
  return returnLength;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);
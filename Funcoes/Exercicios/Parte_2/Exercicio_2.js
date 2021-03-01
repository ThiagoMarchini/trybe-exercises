// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
//Create a function that receives a test array and returns the biggest value's index.

function biggestNumber(array) {
  let biggest = array[0];
  let biggestKey;
  for (let key = 0; key < array.length; key += 1) {
    if (array[key] > biggest) {
      biggest = array[key];
      biggestKey = key;
    }
  }
  return biggestKey;
}

var test = [2, 3, 6, 7, 10, 1];

console.log(biggestNumber(teste));
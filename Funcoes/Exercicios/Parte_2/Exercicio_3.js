//Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
//Create a function that receives an array of numbers and returns the index of the smallest number.

function smallestNumber(array) {
  let smallest = array[0];
  let smallestKey;
  for (let key = 0; key < array.length; key += 1) {
    if (array[key] < smallest) {
      smallest = array[key];
      smallestKey = key;
    }
  }
  return smallestKey;
}

let test = [2, 4, 6, 7, 10, 0, -3];

console.log(smallestNumber(test));
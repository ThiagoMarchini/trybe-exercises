//Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
//Create a function that receives an array of numbers and returns the one that repeats itself the most.

function arrayRepetitionCounter(param) {
  let array = param.sort();
  let vezes = [];
  for (let index = 0; index < array.length; index += 1){
    let number = array[index];
    if (array[index] != array[index + 1]){
      let count = 0;
      for (let index2 = 0; index2 < array.length; index2 += 1) {
        if (number == array[index2]){
          count += 1;
        }
      }
      vezes.push(count);
    }
    
    
  }
  vezes = vezes.sort();
  return vezes[vezes.length - 1];
}

let teste = [2, 3, 2, 5, 8, 2, 3];

console.log(arrayRepetitionCounter(teste));
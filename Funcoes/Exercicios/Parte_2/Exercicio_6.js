//Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N
//Create a function that receives an integer N and returns the sum of all integers from 1 to n

function sumInteger(num){
  let sum = 0;
  for (let index = 1; index <= num; index += 1){
    sum += index;
  }
  return sum;
}

n = 4;

console.log(sumInteger(n));
const readline = require('readline-sync');

// Crie um script que exiba o valor dos n primeiros elementos da sequência de fibonacci.
// A sequência de fibonacci começa com 0 e 1 e os números seguintes são sempre a soma dos dois números anteriores.

const number = readline.questionInt('Digite quantos elementos você deseja mostrar:\n');

const fibonacci = [0, 1];

for (let i = 2; i <= number; i += 1) {
  fibonacci.push(fibonacci[i - 2] + fibonacci[i - 1]);
}

console.log(`A sequência desejada é:\n${fibonacci}`);
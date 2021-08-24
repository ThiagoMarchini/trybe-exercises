const readline = require('readline-sync');

const chosenNumber = readline.questionInt('Digite um número inteiro maior que 0:\n');
if (chosenNumber <= 0) {
  return console.log('Você digitou um número menor ou igual a 0. Saindo.')
}

let fatorial = 1;

for (let i = chosenNumber; i > 0; i -= 1) {
  fatorial = fatorial * i;
}

console.log(`O fatorial de ${chosenNumber} é ${fatorial}`);

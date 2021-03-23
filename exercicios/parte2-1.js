// Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator .

const fatorialLonga = (number) => {
  let result = 1;
  for (let factorial = number; factorial > 1; factorial -= 1) {
    result *= factorial;
  }
  console.log(result);
}

fatorialLonga(4);

const fatorial = (number) => (number > 1) ? number * fatorial(number - 1) : number;
console.log(fatorial(4));
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// Para fixar ainda mais conceito de reduce , faça uma função que some todos os números pares do array:

// Usando filter e reduce:
const getEven = (number) => number % 2 === 0;
const sumPair = (currentValue, number) => currentValue + number;

const sumNumbers = (array) => array.filter(getEven).reduce(sumPair); // Olhe que código pequeno e conciso!

console.log(sumNumbers(numbers)); // 152

// Usando apenas reduce:
const sumPair2 = (value, number) => (
  (number % 2 === 0) ? value + number : value
);

const sumNumbers2 = (array) => array.reduce(sumPair2, 0);

console.log(sumNumbers2(numbers));

const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

// Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const countAa = (string) => {
  let count = 0;
  for (let letter of string) {
    if (letter === 'a' || letter === 'A') {
      count += 1;
    }
  }
  return count;
}

function containsA() {
  return names.reduce(((acc, current, index) => acc += countAa(current)), 0);
}

assert.deepStrictEqual(containsA(), 20);
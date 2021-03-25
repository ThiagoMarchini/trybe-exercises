const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número

// Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
// const expected = myFizzBuzz(15);
// assert.deepStrictEqual(expected, 'fizzbuzz', 'O retorno não foi o esperado.');

// Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
// const expected = myFizzBuzz(9);
// assert.deepStrictEqual(expected, 'fizz', 'O retorno não foi "fizz"');

// Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
// const expected = myFizzBuzz(25);
// assert.deepStrictEqual(expected, 'buzz', 'O retorno não foi "buzz"');

// Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
// const expected = myFizzBuzz(16);
// assert.deepStrictEqual(expected, 16, 'O retorno deveria ser o próprio argumento');

// Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado
// const expected = myFizzBuzz('hi');
// assert.deepStrictEqual(expected, false, 'O retorno não foi "false"');
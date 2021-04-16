// A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número
// Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
// Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
// Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
// Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
// Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado

const myFizzBuzz = require("../exercise-4");

describe('FizzBuzz tests', () => {
  test('Retorno esperado divisível por 3 e 5', () => {
    expect(myFizzBuzz(15)).toEqual('fizzbuzz');
  });
  test('Retorno esperado divisível por 3', () => {
    expect(myFizzBuzz(9)).toEqual('fizz');
  });
  test('Retorno esperado divisível por 5', () => {
    expect(myFizzBuzz(10)).toEqual('buzz');
  });
  test('Retorno esperado não divisível por 3 nem 5', () => {
    expect(myFizzBuzz(4)).toEqual(4);
  });
  test('Retorno esperado não numérico', () => {
    expect(myFizzBuzz('xablau!')).toEqual(false);
  });
});
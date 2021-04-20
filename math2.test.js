const math = require('./math');

jest.mock("./math");

// Faça o mock da funcão subtrair e teste sua chamada.

test("#subtrair", () => {
  math.subtrair = jest.fn();

  math.subtrair();
  expect(math.subtrair).toHaveBeenCalled();
});

// Faça o mock da função multiplicar e implemente como retorno padrão o valor '10'. Teste a chamada e o retorno.

test('#multiplicar', () => {
  math.multiplicar = jest.fn().mockReturnValue(10);

  math.multiplicar();
  expect(math.multiplicar).toHaveBeenCalled();
  expect(math.multiplicar(2, 5)).toEqual(10);
});

// Faça o mock da função somar e implemente uma função que recebe dois valores e retorna sua soma. Teste a chamada, o retorno e os parâmetros passados.

test('#somar 2', () => {
  math.somar.mockImplementation((a, b) => a + b);

  math.somar(1, 2);
  expect(math.somar).toHaveBeenCalled();
  expect(math.somar(2, 5)).toEqual(7);
})

// Faça o mock da função dividir e implemente um retorno padrão com o valor '15'. Implemente também os seguintes valores para a primeira e segunda chamadas: '2' e '5'. Teste a chamada, o retorno, os parâmetros e quantas vezes a função foi chamada.

test('#dividir', () => {
  math.dividir = jest
    .fn()
    .mockReturnValue(15)
    .mockReturnValueOnce(2)
    .mockReturnValueOnce(5);

  expect(math.dividir(10,5)).toBe(2);
  expect(math.dividir).toHaveBeenCalled();
  expect(math.dividir).toHaveBeenCalledTimes(1);
  expect(math.dividir).toHaveBeenCalledWith(10, 5);

  expect(math.dividir(10,2)).toBe(5);
  expect(math.dividir).toHaveBeenCalled();
  expect(math.dividir).toHaveBeenCalledTimes(2);
  expect(math.dividir).toHaveBeenCalledWith(10, 2);

  expect(math.dividir(10,2)).toBe(15);
  expect(math.dividir).toHaveBeenCalled();
  expect(math.dividir).toHaveBeenCalledTimes(3);
  expect(math.dividir).toHaveBeenCalledWith(10, 2);
})

// Faça o mock da função subtrair de maneira que seja possível restaurar sua implementação original. Defina como retorno padrão o valor '20'. Teste o número de chamadas e o retorno.
test('#subtrair', () => {
  const subtrair = jest
    .spyOn(math, "subtrair")
    .mockReturnValue(20);
  
  subtrair.mockClear();
  math.subtrair(4, 2);
  expect(subtrair(25, 5)).toBe(20);
  expect(subtrair).toHaveBeenCalled();
  expect(subtrair).toHaveBeenCalledTimes(2);
  expect(subtrair).toHaveBeenCalledWith(25, 5);
  })
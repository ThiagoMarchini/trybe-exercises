const random = require('./random');

// Crie uma função que gere um número aleatório entre 0 e 100. Você irá criar também os testes para essa função. Utilizando o mock, defina o retorno padrão como 10. Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.

test("testando se a função foi chamada, qual seu retorno e quantas vezes foi chamada", () => {
  random.generateRandom = jest
    .fn().
    mockReturnValue(10);

  expect(random.generateRandom()).toBe(10);
  expect(random.generateRandom).toHaveBeenCalled();
  expect(random.generateRandom).toHaveBeenCalledTimes(1);
});

// Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez. Faça os testes necessários.

test('Testando a implementação da divisão em novo mock', () => {
  random.generateRandom = jest
    .fn()
    .mockImplementation((a, b) => a / b);
  
  expect(random.generateRandom(10, 5)).toBe(2);
  expect(random.generateRandom).toHaveBeenCalled();
  expect(random.generateRandom).toHaveBeenCalledTimes(1);
  expect(random.generateRandom).toHaveBeenCalledWith(10, 5);
});

// Ainda com a mesma função do primeiro exercício, utilizando o mock, crie uma nova implementação que receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela, resete sua implementação e crie uma nova, que receba um parâmetro e retorne seu dobro. Faça os testes necessários.

describe('Testando implementações', () => {
  test('Implementação de multiplicação de tres valores', () => {
    random.generateRandom = jest
      .fn()
      .mockImplementation((a, b, c) => a * b * c);
    
    expect(random.generateRandom(2, 3, 5)).toBe(30);
    expect(random.generateRandom).toHaveBeenCalled();
    expect(random.generateRandom).toHaveBeenCalledTimes(1);
    expect(random.generateRandom).toHaveBeenCalledWith(2, 3, 5);
  })

  test('Implementação da multiplicação por dois', () => {
    random.generateRandom.mockReset();
    expect(random.generateRandom).toHaveBeenCalledTimes(0);

    random.generateRandom.mockImplementation((a) => 2 * a);
    
    expect(random.generateRandom(2)).toBe(4);
    expect(random.generateRandom).toHaveBeenCalled();
    expect(random.generateRandom).toHaveBeenCalledTimes(1);
    expect(random.generateRandom).toHaveBeenCalledWith(2);
  })
})
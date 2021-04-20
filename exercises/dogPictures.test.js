// Mocke a requisição e crie dois testes. O primeiro deve interpretar que a requisição se resolveu e teve como valor "request success". O segundo deve interpretar que a requisição falhou e ter como valor "request failed". Crie todos os testes que achar necessário.

const dogs = require('./dogPictures');

describe('Testando as requisições com mock', () => {

  const dogURL = jest.spyOn( dogs, "fetchURL");
  afterEach(dogURL.mockReset);

  test('Testando sucesso da requisição', async () => {
    dogURL.mockResolvedValue('request success');

    dogURL();
    expect(dogURL).toHaveBeenCalled();
    expect(dogURL).toHaveBeenCalledTimes(1);
    expect(dogURL()).resolves.toMatch('request success');
    expect(dogURL).toHaveBeenCalledTimes(2);
  });

  test('Testando a falha na requisição', async () => {
    dogURL.mockRejectedValue('request failed');

    expect(dogURL).toHaveBeenCalledTimes(0);
    expect(dogURL()).rejects.toMatch('request failed');
    expect(dogURL).toHaveBeenCalledTimes(1);
  });
});
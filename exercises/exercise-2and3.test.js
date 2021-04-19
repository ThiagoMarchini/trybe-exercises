// Utilizando a sintaxe de Promise , faça um teste que verifique o resultado da função getUserName para o caso em que o usuário é encontrado, e também um teste para o caso em que o usuário não é encontrado.
// Dica : Veja os dados falsos utilizados no banco de dados, disponíveis na variável users , para saber quais IDs existem.

// Reescreva o teste do exercício anterior, desta vez utilizando a sintaxe de async/await .
// Dica: Utilize o try/catch para o caso de erro.

const { getUserName } = require("./exercise-2and3")

describe('Testing user\'s name return', () => {
  test('If user\'s id exists', async () => {
    const name = await getUserName(4);
    expect(name).toEqual('Mark');
  });
  test('If user\'s id doesn\'t exist', async () => {
    try {
      await getUserName(2);
    } catch (error) {
      expect(error).toEqual({ error: 'User with 2 not found.' })
    }
  });
});

// Dada a URL 'https://api.github.com/orgs/tryber/repos' , faça um teste que verifique que os repositórios 'sd-01-week4-5-project-todo-list' e 'sd-01-week4-5-project-meme-generator' se encontram nessa lista.

const getRepos = require('./exercise-4');
const url = 'https://api.github.com/orgs/tryber/repos';

describe('Testando Existência de repositórios', () => {
    test('sd-01-week4-5-project-todo-list & sd-01-week4-5-project-meme-generator', async () => {
      expect.assertions(2);
      await expect(getRepos(url)).resolves.toContain('sd-01-week4-5-project-todo-list');
      await expect(getRepos(url)).resolves.toContain('sd-01-week4-5-project-meme-generator');
    });
});
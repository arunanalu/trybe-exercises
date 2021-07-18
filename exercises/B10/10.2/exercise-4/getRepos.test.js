const {
  getRepos
} = require('./getRepos');

it('Verificar se o repositório todo-list está na lista', async () => {
  const url = 'https://api.github.com/orgs/tryber/repos'
  await expect(getRepos(url)).resolves.toContain('sd-01-week4-5-project-todo-list');
});
it('Verificar se o repositório meme-generator está na lista', async () => {
  const url = 'https://api.github.com/orgs/tryber/repos'
  await expect(getRepos(url)).resolves.toContain('sd-01-week4-5-project-meme-generator');
});
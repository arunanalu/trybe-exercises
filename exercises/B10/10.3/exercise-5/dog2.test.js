const fetch = require('node-fetch');
const fetchApi = require('./dog2');

jest.mock('node-fetch'); // mockando toda a biblioteca

fetch.mockImplementationOnce( async () => ({ // o async garante que o retorno é uma promisse. Aqui vamos definir o comportamento do fetch
  json: () => ({ status: 'success'}) // retorna um objeto do tipo jason, com a chave esperada
}));

fetch.mockImplementationOnce(() => {
  return Promise.reject(Promise.reject({ status: 'error'})) // definindo outro compotamento pro fetch. Poderia fazer sem usar reject, e sim usando uma chave diferente
});

test('Deve retornar um link de imagem de cachorro', async () => {
  const data = await fetchApi(); // a fetchApi() vai realizar um fetch, que irá retornar o comportamento definido lá em cima 
  expect(data.status).toBe('success');
})

test('Deve retornar um erro', async () => {
  await expect(fetchApi()).rejects.toEqual({ status: 'error'});
});

const service = require('./dog')

const obj = {
  "message": "https://images.dog.ceo/breeds/pyrenees/n02111500_2272.jpg",
  "status": "success"
}

test('Testa se a função dá um erro ao falhar', () => {
  service.fetchApi = jest.fn().mockRejectedValue('erro');
  expect(service.fetchApi()).rejects.toBe('erro');
  expect(service.fetchApi).toHaveBeenCalledTimes(1);
});

test('Testa se a função retorna um objeto', () => {
  service.fetchApi = jest.fn().mockResolvedValue(obj);
  expect(service.fetchApi()).resolves.toEqual(obj);
  expect(service.fetchApi).toHaveBeenCalledTimes(1);
});
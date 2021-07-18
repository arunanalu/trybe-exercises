const sum = require('./operationSum');
const myRemove = require('./operationRemove')

describe('Soma de dois números funciona corretamente', () => {
  test('Soma de 4 com 5 dá 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
  test('Soma de 0 com 0 dá 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  test('Dá erro ao passar uma string como parâmetro', () => {
    expect(() => {
      sum(4, '5')
    }).toThrow();
  });
  test('A mensagem de erro está correta', () => {
    expect(() => {
      sum (4, '7')
    }).toThrowError(/Parâmetros precisam ser números/)
  })
});

describe('Remover um item de um array funciona corretamente', () => {
  test('Se a chamada [1, 2, 3, 4] retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
  });
  test('Se a chamada [1, 2, 3, 4] não retorna [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
  });
  test('Se o array usado como parâmetro não sofreu alteração', () => {
    const arrayTeste = [1, 2, 3, 4, 5, 6];
    myRemove(arrayTeste, 2);
    expect(arrayTeste).toEqual([1, 2, 3, 4, 5, 6])
  });
});
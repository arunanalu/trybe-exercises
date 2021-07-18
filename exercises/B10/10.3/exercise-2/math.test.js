const math = require('./math');
jest.mock("./math");

test('Testes de mock com a função somar', () => {
  math.somar.mockImplementation((a, b) => a + b);
  math.somar(1, 2);

  expect(math.somar).toHaveBeenCalled();
  expect(math.somar).toHaveBeenCalledTimes(1);
  expect(math.somar).toHaveBeenCalledWith(1, 2);
  expect(math.somar(1, 2)).toBe(3);
});

test('Testes de mock com a função subtrair', () => {
  math.subtrair.mockImplementation((a, b) => a - b);
  math.subtrair.mockImplementationOnce((a, b) => a * 2 - b * 2);
  math.subtrair.mockImplementationOnce((a, b) => a * 2 - b);
  math.subtrair(2, 4);

  expect(math.subtrair).toHaveBeenCalled();
  expect(math.subtrair(4, 4)).toBe(4);
  expect(math.subtrair(2, 2)).toBe(0);
});

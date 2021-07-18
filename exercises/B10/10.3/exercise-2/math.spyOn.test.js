const math = require('./math');

describe('Teste de mock com spyOn e de restore', () => {
  const mockDividir = jest.spyOn(math, 'dividir')
    .mockImplementation((a, b) => a * b)
    
  test("Teste de mock com spyOn", () => {
    expect(mockDividir(8, 2)).toBe(16);
    expect(math.dividir(2, 2)).toBe(4);
    expect(math.dividir).toHaveBeenCalledTimes(2);
    expect(mockDividir).toHaveBeenCalledTimes(2);
  });
  
  test('Teste de restore', () => {
    math.dividir.mockRestore();
    expect(math.dividir(8, 2)).toBe(4);
    expect(mockDividir(8, 2)).toBe(undefined);
  })
});


const service = require('./randomRgb')

describe('Testando a função randomRgbColor mockada com jest.fn()', () => {
  service.randomRgbColor = jest
    .fn()
    .mockReturnValue('rgb(255, 255, 255)')
    .mockReturnValueOnce('rgb(0, 0, 0)')
    .mockReturnValueOnce("rgb(77, 77, 77)");
  test('Testa se a função randomRgbColor retornará rgb(77, 77, 77)', () => {
    service.randomRgbColor();
    expect(service.randomRgbColor).toHaveBeenCalled();
    expect(service.randomRgbColor()).toBe('rgb(77, 77, 77)')
  });
  test('Testa se a função randomRgbColor retornará rgb(255, 255, 255)', () => {
    expect(service.randomRgbColor()).toBe('rgb(255, 255, 255)')
  });
})

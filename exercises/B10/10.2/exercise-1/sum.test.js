const sum = (a, b, callback) => {
  setTimeout(() => {
    return callback(a + b)
  }, 1000)
}

sum(2, 4, console.log)

test('Testando a função soma com callback assíncrono', (done) => {
  sum(2, 4, (callback) => {
    expect(callback).toBe(6);
    done();
  })
});
const assert = require('assert')

const soma = (x, y) => x + y

const expected = soma(2,4)

assert.strictEqual(expected, 6, 'erro')

console.log(soma(2,4))
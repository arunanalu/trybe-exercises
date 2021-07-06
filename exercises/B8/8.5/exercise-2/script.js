const assert = require('assert');

// escreva sum abaixo

const sum = (...args) => args.reduce((acumulador, elemento) => acumulador + elemento, 0)

assert.strictEqual(sum(), 0);
assert.strictEqual(sum(1), 1);
assert.strictEqual(sum(1, 2), 3);
assert.strictEqual(sum(1, 2, 3), 6);
assert.strictEqual(sum(1, 2, 3, 4), 10);
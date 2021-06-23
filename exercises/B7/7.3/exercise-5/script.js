const assert = require('assert');
// escreva a função addOne aqui

function addOne(array) {
  const newArray = []
  for (index = 0; index < array.length; index += 1) {
    newArray.push(array[index] +1)
  }
  return newArray
}

console.log(addOne([1, 2, 3, 4]))

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function', 'erro: linha 1');
assert.deepStrictEqual(output, expected, 'erro: linha 2');
assert.deepStrictEqual(myArray, unchanged, 'erro: linha 3');
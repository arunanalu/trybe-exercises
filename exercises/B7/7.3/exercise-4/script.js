const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

// implemente seus testes aqui

assert.deepStrictEqual([1, 2, 4], myRemoveWithoutCopy([1, 2, 3, 4], 3), 'Erro')
assert.notDeepStrictEqual([1, 2, 3, 4], myRemoveWithoutCopy([1, 2, 3, 4], 3), 'Erro')

const arrayTeste = [1, 2, 3, 4]
myRemoveWithoutCopy(arrayTeste, 1)
assert.notDeepStrictEqual(arrayTeste, [1, 2, 3, 4])

assert.deepStrictEqual([1, 2, 3, 4], myRemoveWithoutCopy([1, 2, 3, 4], 5), 'Erro')
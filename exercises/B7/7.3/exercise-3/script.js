const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// implemente seus testes aqui

assert.deepStrictEqual([1, 2, 4], myRemove([1, 2, 3, 4], 3), 'Erro')
assert.deepStrictEqual([1, 2, 3, 4], myRemove([1, 2, 3, 4], 5), 'Erro')
assert.notDeepStrictEqual([1, 2, 3, 4], myRemove([1, 2, 3, 4], 3), 'Erro')

const arrayTeste = [2, 4, 6, 8]
myRemove(arrayTeste, 8)
assert.deepStrictEqual(arrayTeste, [2, 4, 6, 8], 'Erro')
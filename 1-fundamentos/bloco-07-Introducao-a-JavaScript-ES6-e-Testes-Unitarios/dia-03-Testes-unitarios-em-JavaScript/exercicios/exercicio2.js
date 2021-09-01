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
// 1
assert.strictEqual(typeof myRemove([1, 2, 3, 4], 3),typeof [1, 2, 4]);

// Esta implementação não dá certo - usar deepEqual
// assert.strictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4], 'Deve-se esperar um array sem o 3');

assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]);
// 2 
assert.notStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]);

// 3 

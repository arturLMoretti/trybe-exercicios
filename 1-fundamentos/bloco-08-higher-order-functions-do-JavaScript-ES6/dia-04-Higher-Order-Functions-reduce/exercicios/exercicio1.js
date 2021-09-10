const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  // escreva seu código aqui
  return arrays.reduce((acc,atual) => {
    for (let i = 0; i < atual.length; i += 1) {
      acc.push(atual[i]);
    };
    return acc;
  }, [])
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);
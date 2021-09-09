const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui

// 1
assert.strictEqual(sum(4,5), 9, 'A soma de 4 e 5 deve ser 9');

// 2 
assert.strictEqual(sum(0,0), 0, 'A soma de 0 com 0 deve ser 0');

// 3 
assert.throws(() => sum(4, '5'), "Deve-se retornar um erro quando se soma 4 e '5'");

// 4
assert.throws(() => sum(4, "5") , 'Error: parameters must be numbers'); // OK
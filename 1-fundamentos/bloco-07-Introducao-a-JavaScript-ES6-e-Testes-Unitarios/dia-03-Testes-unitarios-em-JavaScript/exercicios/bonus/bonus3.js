const assert = require('assert');
// escreva a função removeMiddle aqui
const removeMiddle = word => {
  const middle = Math.floor(word.length/2);
  const output = [];
  
  output.push(word[middle])
  word.splice(middle,1);
  
  return output;
};

const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];
const output = removeMiddle(words);

assert.deepStrictEqual(output, expectedOutput);
assert.deepStrictEqual(words, expectedWords);
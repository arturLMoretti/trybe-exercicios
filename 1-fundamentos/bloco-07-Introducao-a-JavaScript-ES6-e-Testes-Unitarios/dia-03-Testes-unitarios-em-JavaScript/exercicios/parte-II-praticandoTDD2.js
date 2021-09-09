const assert = require('assert');
// escreva a função wordLengths aqui

const wordLengths = (words) => {
    const wordLength = []
    for (let i = 0; i < words.length; i += 1) {
        wordLength[i] = words[i].length;
    }
    return wordLength
};


const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);
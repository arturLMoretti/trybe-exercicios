
const removeVowels = (word) => {
    const characters = word.split('');
    let results = '';
    let vogalCount = 0;
  
    for (let index = 0; index < characters.length; index += 1) {
      if (
        characters[index] === 'a' ||
        characters[index] === 'o' ||
        characters[index] === 'i' ||
        characters[index] === 'e' ||
        characters[index] === 'u'
      ) {
        vogalCount = vogalCount + 1;
        results += vogalCount;
      } else {
        results += characters[index];
      }
    }
    return results;
  };
  
  
  const parameter = 'Dayane';
  const result = 'D1y2n3';
  
const assert = require('assert');

assert.strictEqual(removeVowels(parameter), result)
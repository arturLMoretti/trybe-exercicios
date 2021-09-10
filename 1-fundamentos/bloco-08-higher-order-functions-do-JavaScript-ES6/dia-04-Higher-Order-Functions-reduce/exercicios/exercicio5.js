const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  return names.reduce((acc,name) => {
    const nameSplit = name.split('');
    return acc + nameSplit.reduce((accIn, letter) => {
        return (letter.toLowerCase() === 'a') ? accIn + 1 : accIn; 
    }, 0)
  }, 0);
}

assert.deepStrictEqual(containsA(), 20);
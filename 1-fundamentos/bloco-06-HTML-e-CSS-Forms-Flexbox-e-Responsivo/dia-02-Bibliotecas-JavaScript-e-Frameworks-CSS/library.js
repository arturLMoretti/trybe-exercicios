let moment = require('moment')

let brasilTetra = moment('17/07/1994', 'DD/MM/YYYY');
let fromNow = brasilTetra.fromNow();

console.log(`Ouvimos o "É tetra!!!!" há: ${fromNow}`);
// Parte 1
// Exercício 1
// function testingScope(escopo) {
//     if (escopo === true) {
//       let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = `${ifScope} ótimo, fui utilizada no escopo!'`;
//       console.log(ifScope);
//     } else {
//       const elseScope = `Não devo ser utilizada fora meu escopo (else)`;
//       console.log(elseScope);
//     }
//     // console.log(`${ifScope} o que estou fazendo aqui ? :O`); // Se necessário esta linha pode ser removida.
//   }

  const testingScope = (escopo) => {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    const elseScope = `Não devo ser utilizada fora meu escopo (else)`;
    (escopo === true) ? console.log(`${ifScope} ótimo, fui utilizada no escopo!'`) :   
      console.log(elseScope);
    }
    // console.log(`${ifScope} o que estou fazendo aqui ? :O`); // Se necessário esta linha pode ser removida.

  testingScope(true);

  // Exercício 2
  console.log(`Os números ${[2,3,4,7,10,13]} se encontram ordenados de forma cresecente`); // será necessário alterar essa linha 😉
  const oddsAndEvens = [13, 3, 4, 10, 7, 2];

 // Não entendi pq funciona, mas funciona
  oddsAndEvens.sort((a,b)=> {return a-b})

  console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma cresecente`); // será necessário alterar essa linha 😉

  // Parte II
  // Exercício 1

function fatorial(n) {
  if (n <= 1) {
      return 1;
  } else {
      return n*fatorial(n-1);
  }
}

console.log(fatorial(6))

function fatorial2(n) {
    return (n <= 1) ? 1 : n*fatorial2(n-1);
  }
  
  console.log(fatorial2(6))


const fatorial3 = (n) => { return (n <= 1) ? 1 : n*fatorial3(n-1);}
  
  console.log(fatorial3(6))

  // Exercício 2
function longestWord(palavra) {
    let palavras = palavra.split(' ');
    let tamPalavras = [];

    for (let i = 0; i < palavras.length; i += 1) {
        tamPalavras[i] = palavras[i].length;
    }
  console.log(tamPalavras);
}


  console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")) // retorna 'aconteceu'
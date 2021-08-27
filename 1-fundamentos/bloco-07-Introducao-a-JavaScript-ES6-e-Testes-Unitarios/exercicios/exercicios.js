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

  
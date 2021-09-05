// Array.forEach

const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];
  
  const showEmailList = (email) => {
    console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
  };
  
  // Adicione seu código aqui
  emailListInData.forEach((item) => {
      showEmailList(item);
  });

// Array.find
const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (number) => {
  // Adiciona seu código aqui
  return ((number % 3 === 0) && (number % 5 === 0));
}

console.log(numbers.find(findDivisibleBy3And5));


const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (name) => {
  // Adicione seu código aqui:
  return (name.length === 5);
}

console.log(names.find(findNameWithFiveLetters));

const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ]
  
  function findMusic(item) {
    // Adicione seu código aqui
    return (item.id === '31031685');
  }
  
  console.log(musicas.find(findMusic))


  // Array.some e Array.every

  const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  //Adicione seu código aqui
}

console.log(hasName(names, 'Ana'));
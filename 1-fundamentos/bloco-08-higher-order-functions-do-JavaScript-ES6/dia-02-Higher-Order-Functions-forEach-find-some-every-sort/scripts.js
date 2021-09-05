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


const names2 = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (name) => {
  // Adicione seu código aqui:
  return (name.length === 5);
}

console.log(names2.find(findNameWithFiveLetters));

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

const names3 = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  //Adicione seu código aqui
  return (arr.some((elemento)=> elemento === name ));
}

console.log(hasName(names3, 'Ana'));

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 17 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => {
  //Adicione seu código aqui
  return arr.every((element) => element.age >= minimumAge)
}

console.log(verifyAges(people, 18));

// Array.sort

const people2 = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

// Adicione se código aqui
people2.sort((a,b) => a.age - b.age)

console.log(people2);

people2.sort((a,b) => b.age - a.age)

console.log(people2);
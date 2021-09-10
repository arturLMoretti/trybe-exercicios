// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'mação', 'melão', 'melancia'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['suco de laranja', 'açucar', 'leite em pó', 'leite condensado'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));

// Array destructuring

// 1
const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá

const [ frase, func ] = saudacoes;

func(frase);

// Produza o mesmo resultado acima, porém utilizando array destructuring

// 2 
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

[comida, animal, bebida] = [bebida, comida, animal];
console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

// 3s

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

[ impar1, impar2, impar3, ...numerosPares] = numerosPares
console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo

// Default destructuring 

const getNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

let person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

 person = {...person, nationality: 'Brazilian'};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));

// Object property shorthand
const getPosition = (latitude, longitude) => ({
    latitude,
    longitude});
  
  console.log(getPosition(-19.8157, -43.9542));


// Default parameters
const multiply = (number = 0, value = 1) => {
    // Escreva aqui a sua função
    return number * value;
  };
  
  console.log(multiply(8));
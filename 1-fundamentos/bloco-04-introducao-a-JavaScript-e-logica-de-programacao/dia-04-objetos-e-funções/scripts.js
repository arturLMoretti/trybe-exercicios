console.log("Exercício 1 e 2");
player = {
    name: "Marta",
    lasName: 'Silva',
    age: 34, 
    medals: {
        golden:2, 
        silver:3
    }
}

console.log ('A jogadora ' + player.name + ' tem ' + player.age +' anos de idade')


console.log("Exercício 3 e 4");

player["bestInTheWorld"] = [2006, 2007, 2008, 2009, 2010, 2018];

console.log ("A jogadora " + player.name + " foi eleita a melhor do mundo por " + player.bestInTheWorld.length +" vezes.");


console.log("Exercício 5");

console.log ("A jogadora possui " + player.medals.golden + " medalhas de ouro e " + player.medals.silver + " medalhas de prata");


console.log("Contéudo For / In");

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge' 
  };


for (let i in names){
    console.log("Olá " + names[i]);
}

let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

for (let i in car){
    console.log(car);
}
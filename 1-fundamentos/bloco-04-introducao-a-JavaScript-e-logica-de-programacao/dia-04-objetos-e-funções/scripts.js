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
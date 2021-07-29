let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Ex. 1 

for (index = 0; index<numbers.length; index+=1){
    console.log('Usando o for '+ numbers[index]);
}

for (let numeros of numbers){
    console.log('usando o for/of: ' +numeros);
}

// Ex. 2

let soma = 0;

for (i = 0; i<numbers.length; i+=1){
    soma = soma + numbers[i];
}
console.log('A soma é: ' + soma);

// Ex. 3

soma = 0;

for (i = 0; i<numbers.length; i+=1){
    soma = soma + numbers[i];
}
console.log('A média é: ' + soma/numbers.length);
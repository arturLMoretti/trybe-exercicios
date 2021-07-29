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

let media = soma/numbers.length;
console.log('A média é: ' + media);


// Ex. 4


if (media > 20){
    console.log ('valor maior que 20');
} else {
    console.log ('valor menor ou igual a 20');
}

// Ex. 5

let maior = numbers[1];
for (j = 0; j < numbers.length; j+=1){
    
    if (numbers[j]>=maior){
        maior = numbers[j];
    }

}
console.log("O maior número é " + maior);

// Ex. 6

let impares = 0;
for (j = 0; j < numbers.length; j+=1){
    
    if ((numbers[j]%2) !== 0 ){
        impares++;
    }

}
if (impares===0){
    console.log("Nenhum valor ímpar encontrado")
}
console.log("Existem " + impares+ " números ímpares");

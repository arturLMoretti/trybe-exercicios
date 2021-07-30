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


// Ex. 7

let menor = numbers[1];
for (j = 0; j < numbers.length; j+=1){
    
    if (numbers[j]<=menor){
        menor = numbers[j];
    }

}
console.log("O menor número é " + menor);

// Ex. 8 e 9

let array= [1];

for (i = 2; i<26;i+=1){
    array.push(i);
}
console.log(array);

for (i = 0; i<array.length; i+=1){
    console.log(array[i]/2);
}

// Bônus 

// 1 


console.log (numbers);
for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbers[index] < numbers[secondIndex]) {
        let position = numbers[index];
        numbers[index] = numbers[secondIndex];
        numbers[secondIndex] = position;
      }
    }
  }


  console.log(numbers);


  // 2 

for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbers[index] > numbers[secondIndex]) {
        let position = numbers[index];
        numbers[index] = numbers[secondIndex];
        numbers[secondIndex] = position;
      }
    }
  }

  console.log(numbers);


  // 3 

numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let numbersModificado = [0];

for (let j = 0; j<numbers.length; j+=1){
    if (j<numbers.length-1){
        numbersModificado[j] = numbers[j]*numbers[j+1];
    } else if (j===numbers.length-1){
        numbersModificado[j] = numbers[j]*2;
    }
}
console.log(numbersModificado);
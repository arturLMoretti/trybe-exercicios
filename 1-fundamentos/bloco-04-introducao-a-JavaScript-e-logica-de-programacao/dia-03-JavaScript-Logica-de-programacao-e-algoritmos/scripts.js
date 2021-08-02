console.log("Exercício 1");

let n =5;
let ast = [""];

for (let i = 0 ; i<n;i+=1){
    ast = ast + "*";
}
for (let i = 0 ; i<n;i+=1){
    console.log(ast);
} 

console.log("Exercício 2");


let n2 =5;
let ast2 = [""];

for (let i = 0 ; i<n2;i+=1){
    ast2 = ast2 + "*";
    console.log(ast2)
}


console.log("Exercício 3");

let n3 =5;


for (k=1; k<=n3;k+=1){

    let espacos = "";
        for (let i = 0; i<n3; i+=1){
     
            if(i>=n3-k){
                espacos+="*";
            } else {
                espacos +=" "; 
            }

        }   
   
    console.log(espacos);
}


console.log("Exercício 4");

let n4 = 5;

// As estrelas são centralizadas, o número de estrelas é ímpar em cada linha 
// (2n-1, para linha. 2n+1 para índice) 
// A centralização se dá pela adição de n-k espaços antes e depois das estrelas. k é o número da linha.
// Parece que há a montagem de cada linha e depois acontece a impressão destas linhas montadas 

// A posição central varia de acordo com n4. Assim, se n4 =5, a posição central será 3, n4 = 7, 4
// n4 centro
// 5    3
// 7    4
// 9    5
// A posição central será n4 Arredondar para cima (n4/2), 

for (let i = 1; i<=n4; i+=2){    
    let ast4 ="";
    let meio = Math.ceil(n4/2);
    for (j = 1; j<=n4; j+=1){
        if (j === meio) {
            ast4+="*";
        } else {
            ast4+=" ";
        }
    }
    
    
    console.log(ast4+ '*');
            
}


//if (j===1){
 //   ast4+="*";
//} else {
   // ast4+="**";
//}
// Exercício 1 

let n =5;
let ast = [""];

for (let i = 0 ; i<n;i+=1){
    ast = ast + "*";
}
for (let i = 0 ; i<n;i+=1){
    console.log(ast);
} 

// Exercício 2


let n2 =5;
let ast2 = [""];

for (let i = 0 ; i<n2;i+=1){
    ast2 = ast2 + "*";
    console.log(ast2)
}


// Exercício 3

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


// Exercício 4

let n4 = 5;


for (let i = 0; i<n4; i+=1){

}
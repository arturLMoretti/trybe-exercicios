let salarioBruto = 3000;
let salarioLiquido;
let salarioMenosINSS;
let INSS;
let IR;


// Calcula INSS

if (salarioBruto>=5189.82) {
    INSS = 570.88; 
} else if (salarioBruto>=2594.93 && salarioBruto<5189.82){
    INSS = 0.11 * salarioBruto;
} else if (salarioBruto>=1556.95 && salarioBruto<2594.93){
    INSS = 0.09 * salarioBruto;
} else if (salarioBruto>=0.0 && salarioBruto<1556.95){
    INSS = 0.08 * salarioBruto;
} 

salarioMenosINSS = salarioBruto-INSS;
// Calcula IR


if (salarioMenosINSS>=4664.68) {
    IR = 0.275*salarioMenosINSS-869.36; 
} else if (salarioMenosINSS>=3751.06 && salarioMenosINSS<4664.68){
    IR = 0.225 * salarioMenosINSS-636.13;
} else if (salarioMenosINSS>=2826.66 && salarioMenosINSS<3751.05){
    IR = 0.15 * salarioMenosINSS-354.80;
} else if (salarioMenosINSS>=1903.99 && salarioMenosINSS<2826.66){
    IR = 0.075 * salarioMenosINSS-142.80;
} else if (salarioMenosINSS>=0.0 && salarioMenosINSS<1903.99){
    IR = 0;
}

console.log(salarioLiquido = salarioBruto - INSS - IR);


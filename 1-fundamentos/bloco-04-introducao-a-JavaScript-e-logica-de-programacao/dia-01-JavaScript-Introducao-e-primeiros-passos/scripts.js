let nota = 1;

if (nota>=80 && nota<=100){
    console.log("Parabéns, você foi aprovada(o)!");
} else if (nota>=60 && nota<80){
    console.log("Você está na nossa lista de espera");
} else if (nota>=0 && nota < 60){
    console.log("Você foi reprovada(o)"); 
} else {
    console.log("Insira um valor entre 0 e 100");
}
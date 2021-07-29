let nota = -1;

let situacao = "INICIO";

if (nota>=80 && nota<=100){
    situacao = "aprovada";
} else if (nota>=60 && nota<80){
    situacao = "lista";
} else if (nota>=0 && nota < 60){
    situacao = "reprovada"
} else {
    console.log("Insira um valor entre 0 e 100");
}

switch (situacao){
    case 'aprovada':
        
        console.log("Parabéns, você foi aprovada(o)!");
        break;
    case 'lista': 

        console.log("Você está na nossa lista de espera");
        break;
    case 'reprovada':
        
        console.log("Você foi reprovada(o)"); 
        break;
    default:
        console.log("Não se aplica");
        break;
}

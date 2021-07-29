let a1 = 1;
let a2 = 30; 
let a3 = 120; 
let tudoOK = 'v';

if (a1<=0 || a2 <=0 || a3<=0 ) {
    console.log('Insira ângulos Positivos');
    tudoOK = 'Não'
}else if (a1>=180 || a2>=180 || a3>= 180) {
    console.log('Insira ângulos menores que 180°');
    tudoOK= 'Não';
} else{
    tudoOK = 'Sim';
}

switch (tudoOK){
    case "Sim":
        if (a1+a2+a3===180){
            console.log( true );
        } else {
            console.log( false );
        }
        break;
    case "Não":
        console.log ("Inisira ângulos corretos");
        break;
}


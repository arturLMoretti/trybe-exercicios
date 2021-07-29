let valorCusto = 50;
let valorVenda = 100;

let impostoSobreOCusto;
let valorCustoTotal;
let lucro;
let tudoOK;

if (valorCusto<0 || valorVenda<0){
    console.log("Insira valores positivos");
    tudoOK = 'Não';
} else {
    tudoOK = "Sim";
}

switch (tudoOK){
    case "Sim":
        impostoSobreOCusto = 0.2*valorCusto;
        valorCustoTotal = valorCusto+impostoSobreOCusto;
        lucro = valorVenda - valorCustoTotal;

        console.log(1000*lucro);
        break;
    case "Não":
        console.log("Não é possível calcular!");
        break;
}

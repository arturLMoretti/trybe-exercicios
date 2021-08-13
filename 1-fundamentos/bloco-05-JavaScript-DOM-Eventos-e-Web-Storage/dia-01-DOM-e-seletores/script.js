let backgroundUrgente = document.getElementsByClassName('urgent-tasks');
let backgroundNotUrgente = document.getElementsByClassName('not-urgent-tasks');
let fundo = document.getElementById('container');
let rodape = document.getElementById('footer-container');
let cabecalho = document.getElementById('header-container')
let urgentes = document.getElementsByClassName('emergency-tasks');
let naoUrgentes = document.getElementsByClassName('no-emergency-tasks');


// Alterna background Título dos post-its
for (let i = 0; i < backgroundUrgente.length; i +=1){
    backgroundUrgente[i].style.backgroundColor = 'black'
}
for (let i = 0; i < backgroundNotUrgente.length; i +=1){
    backgroundNotUrgente[i].style.backgroundColor = 'blue'
}

// Altera cor do fundo 
fundo.style.backgroundColor = 'RGB(146, 168, 209)'

// Altera rodapé
rodape.style.backgroundColor = 'RGB(0, 161, 112)'

// Altera cabeçalho
cabecalho.style.backgroundColor = 'rgb(0, 161, 112)';


// Alterra cor de fundo Urgentes
for (let i = 0; i < urgentes.length; i +=1){
    urgentes[i].style.backgroundColor = 'RGB(247, 202, 201)';
}

// Altera cor de fundo não-urgentes
for (let i = 0; i < naoUrgentes.length; i +=1){
    naoUrgentes[i].style.backgroundColor = 'RGB(245, 223, 77)';
}
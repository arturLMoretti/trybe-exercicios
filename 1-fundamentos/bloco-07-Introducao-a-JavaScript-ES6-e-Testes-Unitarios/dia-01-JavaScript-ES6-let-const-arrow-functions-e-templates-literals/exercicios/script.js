
function contaCliques() {
    const cliquesAtuais = document.querySelector('.contaVisitas');
    const valor = cliquesAtuais.innerText.match(/\d/g).join("");
    let textoNovo = '';
    let cliquesAtualizado = parseInt(valor) + 1;

    if (cliquesAtualizado > 1) {
      textoNovo = `Este botão foi clicado ${cliquesAtualizado} vezes`
    } else {
      textoNovo = `Este botão foi clicado ${cliquesAtualizado} vez`
    }
    
    cliquesAtuais.innerText = textoNovo;
}

const button = document.querySelector('.cliqueAqui');
button.addEventListener('click', contaCliques);

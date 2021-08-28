
const substituiX = (frase, novoX) => {
    const fraseX = frase.split(' ');
    if (fraseX.includes('x')) {
        return frase.replace(/x/i, novoX);
    } else {
        console.warn('Não existe x nesta frase');
    }
    
}

function montaFrase(frase, skills) {
    skills.sort();
    console.log(skills)
}

const frase = "Tryber x aqui!";
const novoX = "Bebeto";
console.log (substituiX(frase, novoX))

skills = ['HTML', 'JavaScript', 'CSS', 'ES6', 'Testes Unitários', 'Bootstrap']
montaFrase(frase, skills)
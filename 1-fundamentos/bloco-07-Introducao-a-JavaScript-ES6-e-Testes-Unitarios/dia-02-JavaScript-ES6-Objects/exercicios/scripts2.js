const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

// Exercício 1
const adicionaClasse = (objeto, chave, valor) => {
    objeto[chave] = valor
    return objeto;
  }
//console.log(lesson2);
adicionaClasse(lesson2, 'turno', 'manhã');
//console.log(lesson2);

// Exercício 2
const retornaKeys = (objeto) => {
    return Object.keys(objeto);
}
//console.log(retornaKeys(lesson2));

// Exercício 3
const retornaTamanhoObjeto = (objeto) => {
    const chaves = Object.keys(objeto);
    return chaves.length;
}

//console.log(retornaTamanhoObjeto(lesson1));

// Exercício 4
const retornaValores = (objeto) => {
    return Object.values(objeto);
}
//console.log(retornaValores(lesson2));

// Exercício 5
const allLessons = {
    lesson1: lesson1,
    lesson2: lesson2,
    lesson3: lesson3,
}

//console.log(allLessons)

// Exercício 6

const numeroEstudantes = todasTurmas => {
    const qtdeTurmas = retornaTamanhoObjeto(todasTurmas);
    const chaves = retornaKeys(todasTurmas);

    let soma = 0;
    for (let i = 0; i < qtdeTurmas; i +=1) {
        soma = soma + todasTurmas[chaves[i]].numeroEstudantes;
    }
    return soma;
}
// console.log(numeroEstudantes(allLessons));

// Exercício 7
const retornaValorComPosicao = (objeto, posicao) => {
  const valores = retornaValores(objeto);
  return valores[posicao];
}

//console.log(retornaValorComPosicao(lesson1, 0));

// Exercício 8

const verificaPar = (objeto, chave, valor) => {
    const chaves = retornaKeys(objeto);

    if (chaves.includes(chave) === false) {
        return false;
    } else if (objeto[chave] === valor) {
        return true;
    } else {
        return false;
    }
}

//console.log(verificaPar(lesson1, 'materia', 'Matemática'));

// Bônus 
const contaEstudantes = (objeto, professor) => {
  const qtdeTurmas = retornaTamanhoObjeto(objeto);
  const report = {
    professor: professor,
    aulas: '',
    estudantes: 0
  }
  const vetorAulas = [];
  let estudantes = 0;
  for (let i in objeto) {
    const aulasProfessor = verificaPar(objeto[i], 'professor', professor);
    if (aulasProfessor === true) {
        vetorAulas.push(objeto[i].materia)
        estudantes = estudantes + objeto[i].numeroEstudantes;
    }
  }
  report.aulas = vetorAulas;
  report.estudantes = estudantes;
  return report;
}
console.log(contaEstudantes(allLessons, 'Carlos'));
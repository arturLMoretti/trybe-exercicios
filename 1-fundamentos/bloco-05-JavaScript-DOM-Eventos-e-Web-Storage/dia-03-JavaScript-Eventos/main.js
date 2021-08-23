const firstLi = document.getElementById('firstLi');
const secondLi = document.getElementById('secondLi');
const thirdLi = document.getElementById('thirdLi');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');
const conteiner = document.querySelector('.container');

let novaClasse = 'tecnologia';
for (let j = 0; j < conteiner.children.length; j +=1) {
  conteiner.children[j].classList.add(novaClasse);
}

// 1. Copie esse arquivo e edite apenas ele;
// OKs
// 2. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
function addClassTech(event) {
  // O Event é passado como um parâmetro para a função.
  let novaClasse = 'tecnologia';
  event.target.classList.add('tech');
  
  const allTechs = document.getElementsByClassName(novaClasse);
  for (let i = 0; i < allTechs.length; i += 1) {
    if (allTechs[i] !== this) {
      allTechs[i].classList.remove('tech');
    }
  }
}

const quadros = document.querySelectorAll('.tecnologia')

quadros.forEach(element => {
  element.addEventListener('click', addClassTech)
});
//conteiner[0].children.addEventListener('click',addClassTech)
//console.log(conteiner.children.addEventListener('click',addClassTech))
// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
function mudaTexto(event) {
  const tech = document.querySelector('.tech');
  tech.innerText = event.target.value;
}

input.addEventListener('keyup', mudaTexto);

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portifólio?
function redirecionaWebSite() {
  window.open('https://arturlmoretti.github.io/', '_blank');
}
myWebpage.addEventListener('dblclick', redirecionaWebSite);
var corInicial = myWebpage.style.backgroundColor;
// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

function mudaCorOver() {
  this.style.backgroundColor = 'red';
}
function mudaCorLeave() {
  this.style.backgroundColor = corInicial;
}
myWebpage.addEventListener('mouseover', mudaCorOver);
myWebpage.addEventListener('mouseleave', mudaCorLeave);

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.
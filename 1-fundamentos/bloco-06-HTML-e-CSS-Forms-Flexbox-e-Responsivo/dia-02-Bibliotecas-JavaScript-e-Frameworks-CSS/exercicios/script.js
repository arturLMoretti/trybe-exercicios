// Valida data 
import './node_modules/pikaday/pikaday.js'

const data = new Pikaday({
  field: document.getElementById('data'),
  format: 'DD MM YYYY',
  onSelect: function() {
    console.log(this.getMoment().format('Do MMMM YYYY'));
}
});

function criaDiv() {
  const nomeValor = document.getElementById('nome');
  const emailValor = document.getElementById('email')
  const cpfValor = document.getElementById('cpf')
  const enderecoValor = document.getElementById('endereco')
  const cidadeValor = document.getElementById('cidade')
  const estadoValor = document.getElementById('Estado')
  const resumoValor = document.getElementById('resumo-curriculo');
  const cargoValue = document.getElementById('cargo');
  const cargoAtualDescricaoValue = document.getElementById('descricao-cargo');
  const dataInicioValor = document.getElementById('data');

  const div = document.getElementById('curriculoFormatado');
  const Nome = document.createElement('p');
  const email = document.createElement('p');
  const cpf = document.createElement('p');
  const endereco = document.createElement('p');

  // Conforme https://stackoverflow.com/questions/15839169/how-to-get-value-of-selected-radio-button
  const casaApto = document.querySelector('input[name="moro-em"]:checked').value;
  
  const resumoCarreira = document.createElement('p');
  const cargoAtual = document.createElement('div');
  const cargoAtualNome = document.createElement('p');
  const cargoAtualInicio = document.createElement('p');
  const cargoAtualDescricao = document.createElement('p');

  Nome.innerText = 'Nome: ' + nomeValor.value;
  email.innerText = 'E-mail: ' + emailValor.value;
  cpf.innerText = 'CPF: ' + cpfValor.value;
  endereco.innerText = 'Endereço: ' + enderecoValor.value + ', ' + casaApto +', ' + cidadeValor.value + ', ' + estadoValor.value;
  resumoCarreira.innerText = 'Resumo da carreira: ' + resumoValor.value;
  cargoAtualNome.innerText = 'Cargo atual: ' + cargoValue.value;
  cargoAtualInicio.innerText = 'Data de início: ' + dataInicioValor.value;
  cargoAtualDescricao.innerText = 'Descrição do cargo atual: ' + cargoAtualDescricaoValue.value;

  div.appendChild(Nome);
  div.appendChild(email);
  div.appendChild(cpf);
  div.appendChild(endereco);  
  div.appendChild(resumoCarreira);
  div.appendChild(cargoAtual);
  cargoAtual.appendChild(cargoAtualNome);
  cargoAtual.appendChild(cargoAtualInicio);
  cargoAtual.appendChild(cargoAtualDescricao);

}
function evitarDefault(evt) {
  evt.preventDefault();
  
  if (erros ===0) {
    criaDiv();
  } 
}


let botaoEnviarCurriculo = document.getElementById('botaoSubmeter');
botaoEnviarCurriculo.addEventListener('click', evitarDefault);

let estados =  [
    'Selecione',
    'Acre',
    'Alagoas',
    'Amapá',
    'Amazonas',
    'Bahia' ,
    'Ceará',
    'Distrito Federal',
    'Espírito Santo',
    'Goías',
    'Maranhão',
    'Mato Grosso',
    'Mato Grosso do Sul',
    'Minas Gerais',
    'Pará',
    'Paraíba',
    'Paraná',
    'Pernambuco',
    'Piauí',
    'Rio de Janeiro',
    'Rio Grande do Norte',
    'Rio Grande do Sul',
    'Rondônia',
    'Roraíma',
    'Santa Catarina',
    'São Paulo',
    'Sergipe',
    'Tocantins'];

    let estadosSelect = document.querySelector('#Estado');
    
    for (let i = 0; i < estados.length; i += 1) {
        let option = document.createElement('option');
        option.value = estados[i];
        option.innerText = estados[i];
        estadosSelect.appendChild(option);
    }

    const casaRadio = document.getElementById('casa');
  const AptoRadio = document.getElementById('apto');


  const botaoLimpar = document.getElementById('botaoLimpar');
  botaoLimpar.addEventListener('click', (evt)=> {
    evt.preventDefault();
    const currForm = document.getElementById('curriculoFormatado');
    if (currForm) currForm.innerText ='';

    const nomeValor = document.getElementById('nome');
    const emailValor = document.getElementById('email')
    const cpfValor = document.getElementById('cpf')
    const enderecoValor = document.getElementById('endereco')
    const cidadeValor = document.getElementById('cidade')
    const estadoValor = document.getElementById('Estado')
    const resumoValor = document.getElementById('resumo-curriculo');
    const cargoValue = document.getElementById('cargo');
    const cargoAtualDescricaoValue = document.getElementById('descricao-cargo');
    const dataInicioValor = document.getElementById('data');

    if (nomeValor) nomeValor.value ='';
    if (emailValor) emailValor.value ='';
    if (cpfValor) cpfValor.value ='';
    if (enderecoValor) enderecoValor.value ='';
    if (cidadeValor) cidadeValor.value ='';
    if (estadoValor) estadoValor.value ='';
    if (resumoValor) resumoValor.value ='';
    if (cargoValue) cargoValue.value ='';
    if (cargoAtualDescricaoValue) cargoAtualDescricaoValue.value ='';
    if (dataInicioValor) dataInicioValor.value ='';
  });

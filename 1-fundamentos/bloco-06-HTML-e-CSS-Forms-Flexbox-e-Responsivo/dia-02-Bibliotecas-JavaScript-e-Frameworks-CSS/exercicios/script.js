// Inspirado em https://stackoverflow.com/questions/6177975/how-to-validate-date-with-format-mm-dd-yyyy-in-javascript
function isValidDate(date) {
  let temp = date.split('/');
  let dia = temp[0];
  let mes = temp[1];
  let ano = temp[2];
  let mensagem = true;
  if (temp.length < 3) {
    mensagem = 'Insira uma data no formato DD/MM/AAAA'
  }
  if ((dia <= 0) || (dia > 31)) {
    mensagem = 'Insira um dia válido!'
  }
  if ((mes <= 0) || (mes > 12)) {
    if (mensagem === true) {
      mensagem += 'Insira um mês válido!'
    } else {
      mensagem += '\nInsira um mês válido!'
    }
    
  }
  if ((ano <= 0) || (ano > 2021)) {
    if (mensagem === true) {
      mensagem += 'Insira um mês válido!'
    } else {
      mensagem += '\nInsira um mês válido!'
    }
  }
  return mensagem
}

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

  const div = document.createElement('div');
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
  cargoAtualNome.innerText = 'Cargo atual: ' + resumoValor.value;
  cargoAtualInicio.innerText = 'Data de início: ' + dataInicioValor.value;
  cargoAtualDescricao.innerText = 'Descrição do cargo atual: ' + cargoAtualDescricaoValue.value;

  document.body.appendChild(div);
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
  const nomeVazioAlerta = document.getElementById('nome');
  const emailVazioAlerta = document.getElementById('email')
  const cpfVazioAlerta = document.getElementById('cpf')
  const enderecoVazioAlerta = document.getElementById('endereco')
  const cidadeVazioAlerta = document.getElementById('cidade')
  const EstadoVazioAlerta = document.getElementById('Estado')
  const casaRadio = document.getElementById('casa');
  const AptoRadio = document.getElementById('apto');
  const resumoVazioAlerta = document.getElementById('resumo-curriculo');
  const cargoVazioAlerta = document.getElementById('cargo');
  const descCargoVazioAlerta = document.getElementById('descricao-cargo');
  const dataInicioVazioAlerta = document.getElementById('data');

  let erros = 0;
  if (nomeVazioAlerta.value === '') {
    alert('Insira seu nome completo!');
    erros = erros +1;
  }

  if (emailVazioAlerta.value === '') {
    alert('Insira seu e-mail!');
    erros = erros +1;
  }

  if (cpfVazioAlerta.value === '') {
    alert('Insira seu CPF!');
    erros = erros +1;
  }

  if (enderecoVazioAlerta.value === '') {
    alert('Insira seu endereço!');
    erros = erros +1;
  }

  if (cidadeVazioAlerta.value === '') {
    alert('Insira a cidade aonde mora!');
    erros = erros +1;
  }

  if (EstadoVazioAlerta.value === 'Selecione') {
    alert('Insira o estado aonde mora!');
    erros = erros +1;
  }

  if ((casaRadio.checked === false) && (AptoRadio.checked == false)) {
    alert("Selecione 'Casa' caso more em uma casa ou 'Apartamento' caso more em apartamento")
    erros = erros +1;
  }

  if (resumoVazioAlerta.value === '') {
    alert('Insira o resumo da sua carreira!');
    erros = erros +1;
  }

  if (cargoVazioAlerta.value === '') {
    alert('Insira seu cargo atual!');
    erros = erros +1;
  }

  if (descCargoVazioAlerta.value === '') {
    alert('Insira uma descrição para seu cargo atual!');
    erros = erros +1;
  }

  if (dataInicioVazioAlerta.value === '') {
    alert('Insira a data de início do seu emprego atual!');
    erros = erros +1;
  } else {
    let msg = isValidDate(dataInicioVazioAlerta.value);
    if (msg !== true) {
      alert('Insira uma data válida \n' + msg );
      erros = erros +1;
    }
  }
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

  

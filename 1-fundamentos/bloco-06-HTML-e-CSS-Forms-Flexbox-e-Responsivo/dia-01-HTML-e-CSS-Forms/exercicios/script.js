function evitarDefault(evt) {
  evt.preventDefault();
  const nomeVazioAlerta = document.getElementById('nome');
  const emailVazioAlerta = document.getElementById('email')
  const cpfVazioAlerta = document.getElementById('cpf')
  const enderecoVazioAlerta = document.getElementById('endereco')
  const cidadeVazioAlerta = document.getElementById('cidade')
  const EstadoVazioAlerta = document.getElementById('Estado')

  if (nomeVazioAlerta.value === '') {
    alert('Insira seu nome completo!');
  }
  if (emailVazioAlerta.value === '') {
    alert('Insira seu e-mail!');
  }
  if (cpfVazioAlerta.value === '') {
    alert('Insira seu CPF!');
  }
  if (enderecoVazioAlerta.value === '') {
    alert('Insira seu endereço!');
  }
  if (cidadeVazioAlerta.value === '') {
    alert('Insira a cidade aonde mora!');
  }
  if (EstadoVazioAlerta.value === 'Selecione') {
    alert('Insira o estado aonde mora!');
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
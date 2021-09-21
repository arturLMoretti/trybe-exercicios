import { cpf } from './node_modules/cpf-cnpj-validator/dist/cpf-cnpj-validator.es.js';

function loadStates() {
    let estados =  ['Acre',
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
            option.value = i;
            option.innerText = estados[i];
            estadosSelect.appendChild(option);
        }
}

function nameValidation() {
  const nome = document.querySelector('#nome');
  const invalidFeedbackMessage = document.querySelector('.name-invalid');
  const maxLength = 40;
  
  nome.addEventListener('keyup', (event) => {
    const numCar = event.target.value.length;
    event.target.classList.add('is-valid')
    event.target.classList.remove('is-invalid');
      if (numCar > maxLength) {
        invalidFeedbackMessage.innerHTML = `Apenas ${maxLength} caracteres são permitidos!`;
        event.target.classList.remove('is-valid')
        event.target.classList.add('is-invalid');
      }

      if (numCar === 0) {
        event.target.classList.remove('is-valid')
        event.target.classList.add('is-invalid');
      }
  });
}

function emailValidation() {
    const nome = document.querySelector('#email');
    const invalidFeedbackMessage = document.querySelector('.email-invalid');
    const maxLength = 50;

    nome.addEventListener('keyup', (event) => {
      const numCar = event.target.value.length;
      event.target.classList.add('is-valid')
      event.target.classList.remove('is-invalid');
      if (numCar > maxLength) {
        invalidFeedbackMessage.innerHTML = `Apenas ${maxLength} caracteres são permitidos!`;
        event.target.classList.add('is-invalid');
        event.target.classList.remove('is-valid')
      }

      if (numCar === 0) {
        event.target.classList.remove('is-valid')
        event.target.classList.add('is-invalid');
      }
    });
}

function CPFValidation() {
    const nome = document.querySelector('#cpf');
    const invalidFeedbackMessage = document.querySelector('.cpf-invalid');

    nome.addEventListener('keyup', (event) => {
        const CPF = event.target.value;
        event.target.classList.remove('is-valid')
        event.target.classList.add('is-invalid');
        invalidFeedbackMessage.innerHTML = `Insira um CPF válido!`;
        
        if ((CPF.length === 11) && (cpf.isValid(CPF) === true)) {
            event.target.classList.add('is-valid');
            event.target.classList.remove('is-invalid');
        }

        if (CPF.length === 0) {
            event.target.classList.remove('is-valid')
            event.target.classList.add('is-invalid');
        }
        
      });

}

function addressValidation() {
    const nome = document.querySelector('#endereco');
    const invalidFeedbackMessage = document.querySelector('.endereco-ivalido');
    const maxLength = 200;

    nome.addEventListener('keyup', (event) => {
      const numCar = event.target.value.length;
      event.target.classList.add('is-valid')
      event.target.classList.remove('is-invalid');
        if (numCar > maxLength) {
          invalidFeedbackMessage.innerHTML = `Apenas ${maxLength} caracteres são permitidos!`;
          event.target.classList.add('is-invalid');
          event.target.classList.remove('is-valid');
        }

        if (numCar === 0) {
            invalidFeedbackMessage.innerHTML = `Insira seu endereço completo!`;
            event.target.classList.remove('is-valid')
            event.target.classList.add('is-invalid');
        }
    });
}

function cityValidation() {
    const nome = document.querySelector('#cidade');
    const invalidFeedbackMessage = document.querySelector('.cidade-invalido');
    const maxLength = 28;

    nome.addEventListener('keyup', (event) => {
      const numCar = event.target.value.length;
      event.target.classList.add('is-valid');
          event.target.classList.remove('is-invalid');
        if (numCar > maxLength) {
          invalidFeedbackMessage.innerHTML = `Apenas ${maxLength} caracteres são permitidos!`;
          event.target.classList.add('is-invalid');
          event.target.classList.remove('is-valid');
        }

        if (numCar === 0) {
            invalidFeedbackMessage.innerHTML = `Insira seu endereço completo!`;
            event.target.classList.remove('is-valid')
            event.target.classList.add('is-invalid');
        }
    });
}

function stateValidation() {
  const estadosSelect = document.querySelector('#Estado');
  const invalidFeedbackMessage = document.querySelector('.estado-invalido');
  
  estadosSelect.addEventListener('change', (event) => {
    if (!estadosSelect.value) {
      invalidFeedbackMessage.innerHTML = `Selecione um Estado!`;
      event.target.classList.remove('is-valid')
      event.target.classList.add('is-invalid')
    } else {
      event.target.classList.add('is-valid')
      event.target.classList.remove('is-invalid')
    }
  })
}

function liveInValidation() {
  const casaApto = document.querySelectorAll('.form-check-input');
 
  casaApto.forEach((event) => event.addEventListener('click', (event) => {
    if (event.target.value === 'on') event.target.classList.add('is-valid')
  })); 
}

function abstractValidation() {
  const abstract = document.querySelector('#resumo-curriculo');
  const invalidFeedbackMessage = document.querySelector('.abstract-invalido');
  const maxLength = 1000;

  abstract.addEventListener('keyup', (event) => {
    const numCar = event.target.value.length;
    event.target.classList.add('is-valid')
    event.target.classList.remove('is-invalid');
    if (numCar > maxLength) {
      invalidFeedbackMessage.innerHTML = `Apenas ${maxLength} caracteres são permitidos!`;
      event.target.classList.add('is-invalid');
      event.target.classList.remove('is-valid')
    }

    if (numCar === 0) {
      event.target.classList.remove('is-valid')
      event.target.classList.add('is-invalid');
    }
  });
}

function ocupationValidation() {
  const ocupation = document.querySelector('#cargo');
  const invalidFeedbackMessage = document.querySelector('.cargo-invalido');
  const maxLength = 40;

  ocupation.addEventListener('keyup', (event) => {
    const numCar = event.target.value.length;
    event.target.classList.add('is-valid')
    event.target.classList.remove('is-invalid');
    if (numCar > maxLength) {
      invalidFeedbackMessage.innerHTML = `Apenas ${maxLength} caracteres são permitidos!`;
      event.target.classList.add('is-invalid');
      event.target.classList.remove('is-valid')
    }

    if (numCar === 0) {
      event.target.classList.remove('is-valid')
      event.target.classList.add('is-invalid');
    }
  });
}

function jobDescriptionValidation() {
  const ocupation = document.querySelector('#descricao-cargo');
  const invalidFeedbackMessage = document.querySelector('.descricao-cargo-invalida');
  const maxLength = 500;

  ocupation.addEventListener('keyup', (event) => {
    const numCar = event.target.value.length;
    event.target.classList.add('is-valid')
    event.target.classList.remove('is-invalid');
    if (numCar > maxLength) {
      invalidFeedbackMessage.innerHTML = `Apenas ${maxLength} caracteres são permitidos!`;
      event.target.classList.add('is-invalid');
      event.target.classList.remove('is-valid')
    }

    if (numCar === 0) {
      event.target.classList.remove('is-valid')
      event.target.classList.add('is-invalid');
    }
  });
}

function beginingDateValidation() {
    const picker = new Pikaday({
        field: document.getElementById('data'),
        format: 'DD/MM/YYYY',
        onSelect: function() {
          const dateField = document.querySelector('.beginning-date');
          dateField.addEventListener('change', (event) => {
            event.classList.add('is-valid');
          })
        },
        i18n: {
            months        : ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
            weekdays      : ['Doming','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'],
            weekdaysShort : ['Dom','Seg','Ter','Qua','Qui','Sex','Sab']
        },
        showDaysInNextAndPreviousMonths: true,
        enableSelectionDaysInNextAndPreviousMonths: true,
    });
}

function criaDiv(evt) {
    evt.preventDefault();
    evt.stopPropagation();
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
    cargoAtualNome.innerText = 'Cargo atual: ' + cargoValue.value;
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

  function botaoSubmeter() {
    let botaoEnviarCurriculo = document.getElementById('botaoSubmeter');
    botaoEnviarCurriculo.addEventListener('click', criaDiv);
  }

function botaoLimpar() {
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
}
window.onload = () => {
  loadStates();
  nameValidation();
  emailValidation();
  CPFValidation();
  addressValidation();
  cityValidation();
  stateValidation();
  liveInValidation();
  abstractValidation();
  ocupationValidation();
  jobDescriptionValidation();
  beginingDateValidation();
  botaoSubmeter();
  botaoLimpar();
};
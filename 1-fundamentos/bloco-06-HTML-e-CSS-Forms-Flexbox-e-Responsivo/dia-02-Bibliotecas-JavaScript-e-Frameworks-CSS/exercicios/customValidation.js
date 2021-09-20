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
      
  })); 
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
//   abstractValidation();
//   ocupationValidation();
//   jobDescriptionValidation();
//   beginingDateValidation();
};
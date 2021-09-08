function selectValidation(name, value) {
    return !(name === value);
}
new window.JustValidate('.form', {
  rules: {
      name: {
          required: true,
          maxLength: 40,
      },
      email: {
        required: true,
        email: true,
        maxLength: 50,
    },
      cpf: {
        required: true,
        maxLength: 11,
        strength: {
          custom: '^[0-9]+$',
        }
      },
      endereco: {
        required: true,
        maxLength: 200,
      },
      cidade: {
        required: true,
        maxLength: 28,
      },
      estado: {
        required: true,
      },
      submitHandler: selectValidation,
      moroEm: {
        required: true,
      },
      checkbox: {
          required: true,
          
      },
      checkbox2: {
          required: true
      },
      messages: {
        name: {
          required: 'Preencha seu nome completo',
          maxLength: 'Insira até 40 caracteres!',
        }
      }
  },
  invalidFormCallback: function (errors) {
    console.log(errors);
},
  focusWrongField: true,
});

const beginningDate = document.getElementById('data');
beginningDate.DatePickerX.init({
  format: 'dd/mm/yyyy',
  weekDayLabels: ['S', 'T', 'Q', 'Q', 'S', 'S', 'D'],
  singleMonthLabels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  todayButtonLabel: 'Hoje',
  clearButtonLabel: 'Limpar',
  shortMonthLabels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
});

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

  const estadosSelect = document.querySelector('#Estado');
  
  for (let i = 0; i < estados.length; i += 1) {
      const option = document.createElement('option');
      option.value = estados[i];
      option.innerText = estados[i];
      estadosSelect.appendChild(option);
  }
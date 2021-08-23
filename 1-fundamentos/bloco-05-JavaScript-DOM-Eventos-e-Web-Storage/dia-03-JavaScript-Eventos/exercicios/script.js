function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  // Exercício 1
  function createDays() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const dezDaysHTML = document.getElementById('days');

    for (let i = 0; i < dezDaysList.length; i +=1) {
      const days = dezDaysList[i];
      const daysContainer = document.createElement('li');

      daysContainer.innerText = days;
      daysContainer.className = 'day';

      if ((days === 24) || (days == 25) || (days == 31)){
        daysContainer.className += ' holiday';
      }

      if ((days === 4) || (days == 11) || (days == 18) || (days == 25)){
        daysContainer.className += ' friday';
      }


      dezDaysHTML.appendChild(daysContainer);
    }
  }

  createDays();

  // Exercicio 2
  const feriados = 'Feriados';

  const button = document.createElement('button');
  button.id = 'btn-holiday';
  button.innerText = feriados;
  button.style.padding = '5px 20px';
  button.style.backgroundColor = 'rgb(200,152,148)'
  button.style.fontSize = '20px'
  
  
  const localBotao = document.querySelector('.buttons-container');

  localBotao.appendChild(button);

  // Exercício 3

  function changeColorHolidays() {
    const holidays = document.getElementsByClassName('holiday');

    for (let i = 0; i <holidays.length; i += 1) {
      if (holidays[i].style.backgroundColor === 'rgb(238, 238, 238)') {
    
        holidays[i].style.backgroundColor = 'rgb(0, 204, 0)';
    
      } else if (holidays[i].style.backgroundColor === 'rgb(0, 204, 0)') {
    
        holidays[i].style.backgroundColor = 'rgb(238, 238, 238)';
    
      }
    }
    

    
  }
  const holidays = document.getElementsByClassName('holiday');
  for (let i = 0; i < holidays.length; i += 1) {
    holidays[i].style.backgroundColor = 'rgb(238,238,238)';
  }
  button.addEventListener('click', changeColorHolidays);

// Exercício 4 
const sexta = 'Sexta-Feira';

  const button2 = document.createElement('button');
  button2.id = 'btn-friday';
  button2.innerText = 'Sexta-Feira';
  button2.style.padding = '5px 20px';
  button2.style.backgroundColor = 'rgb(200,152,148)'
  button2.style.fontSize = '20px'
  
  localBotao.appendChild(button2);

  // Exercício 5
var originalFridayDays = ['4','11', '18', '25' ];
  function changeTextFriday() {
    const sexta = document.getElementsByClassName('friday');
    
    for (let i = 0; i < sexta.length; i += 1) {
      
      if (sexta[i].innerText === 'Sextou!!!') {
        console.log(originalFridayDays[0].innerText)
        sexta[i].innerText = originalFridayDays[i];
      } else {
        sexta[i].innerText = 'Sextou!!!'
      }
    }
    
  }
  
  button2.addEventListener('click', changeTextFriday);

  // Exercicio 6

const dayClass = document.getElementById('days');

function mouseOver(event) {
  event.target.style.fontSize = '45px';
}

function mouseLeave(event) {
  event.target.style.fontSize = '20px';
}

dayClass.addEventListener('mouseover', mouseOver);
dayClass.addEventListener('mouseout', mouseLeave);

// Exercício 7


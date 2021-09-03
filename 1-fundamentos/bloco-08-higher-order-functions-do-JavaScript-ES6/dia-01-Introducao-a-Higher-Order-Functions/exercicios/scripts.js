const idCreator = name => {
    const nameEmail = name.split(' ');
    let emailId = '';

    for (let i = 0; i < nameEmail.length; i += 1) {
        emailId += `${nameEmail[i]}_`
    }
    emailId = emailId.substring(0, emailId.length - 1);
    emailId = emailId.toLowerCase();

    return { name: name, email: `${emailId}@trybe.com`}
};

const newEmployees = (callback) => {
    const employees = {
      id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

  console.log(newEmployees(idCreator));

const checkFunction = (a,b) => a===b ? 'Parabéns você ganhou' : `Resultado: ${b}! Tente novamente`;

const result = (num, func) => {
    const rnd = Math.floor(Math.random() * 4) + 1;
    console.log(func(num, rnd));
}

result(4,checkFunction)

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const gradeFunction = (rigth, student) => {
    let grade = 0; 

    for (let i = 0; i < rigth.length; i +=1) {
        if (student[i] === 'N.A') {
            grade += 0;
        } else if (student[i] === rigth[i]) {
            grade +=1; 
        } else {
            grade -=0.5;
        }
    }
    return grade;
}

const gradeGiver = (right, student, func) => console.log(`Sua nota é ${func(right, student)}`);;

gradeGiver(RIGHT_ANSWERS, STUDENT_ANSWERS, gradeFunction)
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

console.log(idCreator('Artur Lemes Moretti'));
const newEmployees = () => {
    const employees = {
      id1: '', // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: '', // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: '', // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };


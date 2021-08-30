function retornaObjNovaChave(objeto,chave,valor) {
    objeto[chave] = valor;
    return objeto;
}

// const customer = {
//     firstName: 'Roberto',
//     age: 22,
//     job: 'Teacher',
//   };

// console.log(retornaObjNovaChave(customer, 'time', 'curintcha'))

// const customer = {
//     firstName: 'Roberto',
//     age: 22,
//     job: 'Teacher',
//   };
  
//   let newKey = 'lastName';
//   const lastName = 'Ferreira';
//   customer[newKey] = lastName;
//   newKey = 'fullName';
//   const fullName = `${customer.firstName} ${customer.lastName}`;
//   customer[newKey] = fullName;
//   console.log(customer);

//   customer.timeFutebol = 'Curintcha';
//   customer.job = 'diretor';
//   console.log(customer);

//   const coolestTvShow = {
//     name: "BoJack Horseman",
//     genre: "adult animation",
//     createdBy: "Raphael Bob-Waksberg",
//     favoriteCharacter: "Princess Carolyn",
//     quote: "Princess Carolyn always lands on her feet.",
//     seasons: 6,
//   };
  
//   // for (const property in coolestTvShow) {
//   //   console.log(property);
//   // }
  
//   console.log(Object.keys(coolestTvShow));
  
//   // [ 'name', 'genre', 'createdBy', 'favoriteCharacter', 'quote', 'seasons' ]

//   const student1 = {
//     Html: 'Muito Bom',
//     Css: 'Bom',
//     JavaScript: 'Ótimo',
//     SoftSkills: 'Ótimo',
//   };
  
//   const student2 = {
//     Html: 'Bom',
//     Css: 'Ótimo',
//     JavaScript: 'Ruim',
//     SoftSkills: 'Ótimo',
//     Git: 'Bom', // chave adicionada
//   };

function exibeHabilidade(objeto) {
  const habilidades = Object.keys(objeto);
  let texto = [];
  for (let i = 0; i < habilidades.length; i += 1) {
      texto[i] = `${habilidades[i]}, nível: ${objeto[habilidades[i]]}`
  };

  return texto
}

const listSkills = (student) => {
    const arrayOfSkills = Object.keys(student);
    for(index in arrayOfSkills){
      console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
    }
  };

const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
  };
  
  const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', // chave adicionada
  };

  console.log('Estudante 1')
  console.log(exibeHabilidade(student1));
  console.log('Estudante 2');
  console.log(exibeHabilidade(student2));

  console.log('Estudante 1')
  console.log(listSkills(student1));
  console.log('Estudante 2');
  console.log(listSkills(student2));
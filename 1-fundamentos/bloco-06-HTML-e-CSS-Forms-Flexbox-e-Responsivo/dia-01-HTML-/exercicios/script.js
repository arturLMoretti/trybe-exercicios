function evitarDefault(evt) {
    evt.preventDefault();
}

let botaoEnviarCurriculo = document.getElementById('botaoSubmeter');
botaoEnviarCurriculo.addEventListener('click', evitarDefault);

let estados =  [
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
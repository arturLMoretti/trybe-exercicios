const corBG = document.getElementById('corBG');
corBG.addEventListener('change', ()=> {
  let cor = corBG.selectedOptions[0];
  document.body.style.backgroundColor = cor.value;
  localStorage.setItem('corBackground', cor.value);
});

const corTexto = document.getElementById('corTexto');
const principal = document.querySelector('.principal');
corTexto.addEventListener('change', ()=> {
    let cor = corTexto.selectedOptions[0];
    principal.style.color = cor.value;
    localStorage.setItem('corTexto', cor.value);
});

const tamTexto = document.getElementById('tamFonte');
tamTexto.addEventListener('change', ()=> {
    let tamFonte = tamTexto.selectedOptions[0];
    principal.style.fontSize = tamFonte.value;
    localStorage.setItem('tamanhoFonte', tamFonte.value);
});

const espLetras = document.getElementById('espLinhas');
principal.style.lineHeight = '1.6';
espLetras.addEventListener('change', ()=> {
    let espacamento = espLetras.selectedOptions[0];
    principal.style.lineHeight = espacamento.value;
    localStorage.setItem('espacamentoLetras', espacamento.value);
});

const tipoFonte = document.getElementById('tipoFonte');
tipoFonte.addEventListener('change', ()=> {
    let tipodaFonte = tipoFonte.selectedOptions[0];
    principal.style.fontFamily = tipodaFonte.value;
    localStorage.setItem('tipoFonte', tipodaFonte.value);
});

document.body.style.backgroundColor = localStorage.getItem('corBackground');
principal.style.color = localStorage.getItem('corTexto');
principal.style.fontSize = localStorage.getItem('tamanhoFonte');
principal.style.lineHeight = localStorage.getItem('espacamentoLetras');
principal.style.fontFamily = localStorage.getItem('tipoFonte');

const nome = document.querySelector('#nome');

nome.addEventListener('keyup', (event) => {
    const numCar = event.target.value.length;
    if (numCar > 10) {
        event.target.classList.add('is-invalid');
    }
});
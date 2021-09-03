const acordando = () => console.log('Acordando!!');
const cafe = () => console.log('Bora tomar café!!');
const dormir = () => console.log('Partiu dormir!!');

const doingThings = (func) => func();

doingThings(acordando);
doingThings(cafe);
doingThings(dormir);
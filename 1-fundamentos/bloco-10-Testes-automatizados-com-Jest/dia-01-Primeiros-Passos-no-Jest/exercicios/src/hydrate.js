const hydrate = (drinkList) => {
    const drinkQtdy = drinkList
    .replace(/[^0-9]/g, '')
    .split('').reduce((acc, atual) => acc + parseInt(atual), 0);
    let waterCups = 'copos de água'

    if (drinkQtdy === 1) {
        waterCups = 'copo de água'
    };

    return `${drinkQtdy} ${waterCups}`;
};

module.exports = hydrate;
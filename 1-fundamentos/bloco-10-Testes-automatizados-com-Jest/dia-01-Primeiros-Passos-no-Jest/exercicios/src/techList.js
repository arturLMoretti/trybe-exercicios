const techList = (techs, name) => {
    return (techs.length === 0) ? 'Vazio!' : techs.sort().map((elem) => ({ tech: elem, name: name }));
};

module.exports = techList;
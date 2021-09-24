const sum = require('../src/sum')

test('1 - A soma de 4 e 5 deve ser 9', () => {
    expect(sum(4, 5)).toBe(9)
});

test('2 - A soma de 0 e 0 deve ser 0', () => {
    expect(sum(0, 0)).toBe(0)
});

test('3 - a soma de 4 e "5" deve retornar um erro', () => {
    expect(() => {sum(4, '5')}).toThrow();
});

test('4 - a mensagem de erro deve ser "parameters must be numbers"', () => {
    expect(() => {sum(4, '5')}).toThrowError('parameters must be numbers');
});

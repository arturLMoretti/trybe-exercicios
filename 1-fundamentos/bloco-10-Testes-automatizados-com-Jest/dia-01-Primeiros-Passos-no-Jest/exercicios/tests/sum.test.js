import sum from '../src/sum.js';

test('1 - A soma de 4 e 5 deve ser 9', () => {
    expect(sum(4, 5)).toBe(9)
});
const myRemove = require('../src/myRemove');

test('1 - Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    par1 = [1, 2, 3, 4];
    par2 = 3;
    expected = [1, 2, 4];

    expect(myRemove(par1, par2)).toEqual(expected);
});

test('2 - Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    par1 = [1, 2, 3, 4];
    par2 = 3;
    notExpected = [1, 2, 3, 4];

    expect(myRemove(par1, par2)).not.toEqual(notExpected);
});

test('3 - Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
    par1 = [1, 2, 3, 4];
    par2 = 5;
    expected = [1, 2, 3, 4];

    expect(myRemove(par1, par2)).toEqual(expected);
});


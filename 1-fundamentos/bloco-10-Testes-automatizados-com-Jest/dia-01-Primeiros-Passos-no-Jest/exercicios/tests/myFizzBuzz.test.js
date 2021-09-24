const myFizzBuzz = require('../src/myFizzBuzz');

test('1 - A chamada com um número divísivel por 3 e 5 deve retornar "fizzbuzz"', () => {
    par = 15;
    expected = 'fizzbuzz';
    expect(myFizzBuzz(par)).toBe(expected);

});

test('2 - A chamada com um número divísivel apenas por 3 deve retornar "fizz"', () => {
    par = 9;
    expected = 'fizz';
    expect(myFizzBuzz(par)).toBe(expected);
    
})

test('3 - A chamada com um número divísivel apenas por 3 deve retornar "fizz"', () => {
    par = 10;
    expected = 'buzz';
    expect(myFizzBuzz(par)).toBe(expected);
    
})

test('4 - A chamado com um número que não é divisível por 3 e nem por 5 deve retornar o próprio número', () => {
    par = 11;
    expected = par;
    expect(myFizzBuzz(par)).toBe(expected);
    
})

test('5 - A chamada com um parâmetro que não é um número deve retornar "false"', () => {
    par = 'banana';
    expected = false;
    expect(myFizzBuzz(par)).toBe(expected);
    
})
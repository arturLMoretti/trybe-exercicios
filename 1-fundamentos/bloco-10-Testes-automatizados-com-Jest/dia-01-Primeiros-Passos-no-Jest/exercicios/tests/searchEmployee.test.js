const searchEmployee = require('../src/searchEmployee');

test('1 - verifica que a função existe', () => {
    expect(searchEmployee).toBeDefined();
});

test(`2 - caso a id informada não conste no quadro de funcionários, 
        a função deve retornar "ID não identificada"`, () => {
            employee = '1111-9';
            employeeNotFoundMsg = 'ID não identificada';
            expect(searchEmployee(employee, 0)).toBe(employeeNotFoundMsg);
});

test(`3 - caso a informação que se deseja acessar não exista, 
        a função deve retornar o erro "Informação indisponível"`, () => {
            employee = '8579-6';
            inf = 'especiality'
            infNotFoundMsg = 'Informação indisponível';
            expect(searchEmployee(employee, inf)).toBe(infNotFoundMsg);
});

test(`4 - caso o id e a informação existam, 
        a função deve retornar o que está armazenado`, () => {
            employee = '8579-6';
            inf = 'specialities'
            expected = ['UX', 'Design'];
            expect(searchEmployee(employee, inf)).toEqual(expected);
});
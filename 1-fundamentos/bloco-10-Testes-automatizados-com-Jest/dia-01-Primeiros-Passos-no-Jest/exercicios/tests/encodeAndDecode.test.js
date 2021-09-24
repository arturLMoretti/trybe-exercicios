const {encode, decode} = require('../src/encodeAndDecode');

describe('1 - Tests functions encode and decode', () => {
    it('should be a function', ()=> {
        expect(typeof encode).toBe('function');
    });

    it('should be a function', ()=> {
        expect(typeof decode).toBe('function');
    });

    it('should return 1, 2, 3, 4 and 5 when supplied with a, e,i,o and u, respectively', ()=> {
        par = 'aeiou';
        expected = '12345'
        expect(encode(par)).toBe(expected);
    });

    it('should return a, e, i, o, and u when supplied with 1, 2, 3, 4, and 5 respectively', ()=> {
        par = '12345';
        expected = 'aeiou'
        expect(decode(par)).toBe(expected);
    });

    it('should not convert other leters', ()=> {
        par = 'abestado';
        expected = '1b2st1d4'
        expect(encode(par)).toBe(expected);
    });

    it('should not convert other numbers', ()=> {
        par = 'b4l1ch18';
        expected = 'bolacha8'
        expect(decode(par)).toBe(expected);
    });

    it('should return a string with the same length as the input string', ()=> {
        par = 'abdominalEjabuticaba';
        expected = par.length;
        expect(encode(par).length).toBe(expected);
    });

    it('should return a string with the same length as the input string', ()=> {
        par = '123456789641332411342';
        expected = par.length;
        expect(decode(par).length).toBe(expected);
    });
})
const curry = require('../js/currying');

const sum = (a, b, c) => a + b + c;

describe('testing curry function',()=>{
    it('should run as usual function without error', () => {
        const t = curry(sum);
        expect(t(2, 3, 4)).toBe(9);
    });
    it('should run as curry function with several calls', () => {
        const t = curry(sum);
        expect(t(2)(3)(4)).toBe(9);
    });
    it('should ignore redundant parameter', () => {
        const t = curry(sum);
        expect(t(2, 3, 4, 3)).toBe(9);
    });
    it('should return a function when you give 0 parameters', () => {
        const t = curry(sum);
        expect(t()).toEqual(expect.any(Function));
    });
    it('should return a function when you don\' give enough parameters', () => {
        const t = curry(sum);
        expect(t(2, 3)).toEqual(expect.any(Function));
    });

    /*it('should run the function three times',()=>{
       const t = curry(sum);
       const mockFunc = jest.fn();
       const res = mockFunc(t);
       expect(mockFunc).toHaveBeenCalledTimes(3);
    })*/

});


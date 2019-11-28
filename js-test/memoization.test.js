const memoize = require('../js/memoization');

describe('testing memoize function', () => {
    it('should test parsing method of memoize', () => {
        const objReturn = (obj) => obj;
        const t = memoize(objReturn);
        const obj1 = {a: 1, b: 2};
        t(obj1);
        const obj2 = {a: 1, b: 2};
        expect(t(obj2)).toBe(obj1)
    });
    it('should call the function only twice', () => {
        const mockCallback = jest.fn();
        const sum = (a, b) => {
            mockCallback();
            return a + b;
        };
        const m = memoize(sum);
        let var1 = m(2, 3);
        let var2 = m(3, 2);
        let var3 = m(2, 3);
        expect(mockCallback.mock.calls.length).toBe(2);
    })
});

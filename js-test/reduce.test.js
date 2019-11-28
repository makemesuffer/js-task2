const reducePoly = require('../js/reduce');

describe('testing reduce function',()=>{
    it('should convert [1,2] into 3', () => {
        expect(reducePoly([1, 2], function (current, sum) {
            return current + sum;
        }, 0)).toBe(3);
    });
    it('should catch an array error', () => {
        try {
            const t = reducePoly('privet', (function (current, sum) {
                return sum + current;
            }), 0);
        } catch (e) {
            expect(e.message).toBe('this is not an array');
        }
    });

});

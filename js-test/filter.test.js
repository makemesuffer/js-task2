const filterPoly = require('../js/filter');

describe('testing filter function',()=>{
    it('should remove 2 from array', () => {
        expect(filterPoly(function (elem) {
            return elem > 2;
        }, [3, 2, 4])).toStrictEqual([3, 4]);
    });
    it('should catch an array error', () => {
        try {
            const t = filterPoly(function (elem) {
                return elem > 2;
            }, 'privet');
        } catch (e) {
            expect(e.message).toBe('this is not an array');
        }
    });
});

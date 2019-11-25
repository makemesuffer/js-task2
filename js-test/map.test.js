const mapPoly = require('../js/map');

describe('testing map function',()=>{
    it('should modify all elements of array by adding 2', () => {
        expect(mapPoly(function (elem) {
            return elem + 2;
        }, [1, 2])).toStrictEqual([3, 4]);
    });
    it('should catch an array error', () => {
        try {
            const t = mapPoly(function (elem) {
                return elem + 2;
            }, 'privet');
        } catch (e) {
            expect(e.message).toBe('this is not an array');
        }
    });
});

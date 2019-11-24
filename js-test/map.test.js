const mapPoly = require('../js/map');

test('adding 2 to all elem of arr', () => {
    expect(mapPoly(function (elem) {
        return elem + 2;
    }, [1, 2])).toStrictEqual([3, 4]);
});
test('error testing', () => {
    try {
        const t = mapPoly(function (elem) {
            return elem + 2;
        }, 'privet');
    } catch (e) {
        expect(e.message).toBe('this is not an array');
    }
});
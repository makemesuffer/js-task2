const filterPoly = require('../js/filter');

test('adding 2 to all elem of arr', () => {
    expect(filterPoly(function (elem) {
        return elem > 2;
    }, [3, 2, 4])).toStrictEqual([3, 4]);
});
test('error testing', () => {
    try {
        const t = filterPoly(function (elem) {
            return elem > 2;
        }, 'privet');
    } catch (e) {
        expect(e.message).toBe('this is not an array');
    }
});
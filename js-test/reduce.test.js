const reducePoly = require('../js/reduce');

test('adds 1 + 2 to equal 3', () => {
    expect(reducePoly([1, 2],function (current,sum) {
        return current+sum;
    },0)).toBe(3);
});
test('error testing', () => {
    try {
        const t = reducePoly('privet', (function (current, sum) {
            return sum + current;
        }), 0);
    }catch (e) {
        expect(e.message).toBe('this is not an array');
    }
});
const memoize = require('../js/memoization');

test('memoization testing', () => {
    const sum = (a, b) => a + b;
    const t = memoize(sum);
    expect(t(2, 3)).toStrictEqual(5);
});
test('memoization object testing', () => {
    const objReturn = obj => obj;
    const t = memoize(objReturn);
    expect(t({a: 1, b: 2})).toStrictEqual({a: 1, b: 2});
});

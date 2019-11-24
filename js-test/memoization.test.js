const memoize = require('../js/memoization');

test('memoization testing', () => {
    const sum = (a,b) =>a+b;
    const t = memoize(sum);
    expect(t(2,3)).toStrictEqual(5);
});

const curry = require('../js/currying');

const sum = (a, b, c) => a + b + c;

test('testing curry function', () => {
    let t = curry(sum);
    expect(t(2, 3, 4)).toBe(9);
});
test('testing curry function', () => {
    let t = curry(sum);
    expect(t(2)(3)(4)).toBe(9);
});
test('testing curry function', () => {
    let t = curry(sum);
    expect(t(2, 3)(4)).toBe(9);
});
test('testing curry function', () => {
    let t = curry(sum);
    expect(t(2, 3, 4, 3)).toBe(9);
});
test('testing curry function', () => {
    let t = curry(sum);
    expect(t()).toEqual(expect.any(Function));
});
test('testing curry function', () => {
    let t = curry(sum);
    expect(t(2, 3)).toEqual(expect.any(Function));
});

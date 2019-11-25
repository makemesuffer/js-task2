const {Square, Rectangle} = require('../js/inheritance');


test('testing Rectangle area method', () => {
    let t = new Rectangle(6, 5);
    expect(t.calculateArea()).toBe(30);
});
test('testing Rectangle perimeter method', () => {
    let t = new Rectangle(6, 5);
    expect(t.calculatePerimeter()).toBe(22);
});
test('testing Square perimeter method', () => {
    let t = new Square(5);
    expect(t.calculatePerimeter()).toBe(20);
});
test('testing Square area method', () => {
    let t = new Square(5);
    expect(t.calculateArea()).toBe(25);
});

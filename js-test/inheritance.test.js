const {Square, Rectangle} = require('../js/inheritance');


describe('testing inheritance of classes',()=>{
    it('should test Rectangle area method', () => {
        let t = new Rectangle(6, 5);
        expect(t.calculateArea()).toBe(30);
    });
    it('should test Rectangle perimeter method', () => {
        let t = new Rectangle(6, 5);
        expect(t.calculatePerimeter()).toBe(22);
    });
    it('should test Square perimeter method', () => {
        let t = new Square(5);
        expect(t.calculatePerimeter()).toBe(20);
    });
    it('should test Square area method', () => {
        let t = new Square(5);
        expect(t.calculateArea()).toBe(25);
    });
});


class Shape {
    constructor(name) {
        this.name = name;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
        this.name = 'Rectangle';
    }
    calculateArea() {
        return this.width * this.height;
    }
    calculatePerimeter() {
        return (this.height + this.width) * 2;
    }

}

class Square extends Rectangle {
    constructor(sideLength) {
        super();
        this.name = 'Square';
        this.width = this.height = sideLength;
    }
}

module.exports = {Rectangle,Square};


export {Shape,Rectangle,Square};
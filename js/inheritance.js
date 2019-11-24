console.log('-------------------INHERITANCE------------------');

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

let pryamoug = new Rectangle(4, 5);
console.log(pryamoug.calculateArea());
console.log(pryamoug.calculatePerimeter());


class Square extends Rectangle {
    constructor(sideLength) {
        super();
        this.name = 'Square';
        this.width = this.height = sideLength;
    }
}


let kvadrat = new Square(5);
console.log(kvadrat.calculateArea());
console.log(kvadrat.calculatePerimeter());


module.exports = Square;
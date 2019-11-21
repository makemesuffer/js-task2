console.log('-------------------INHERITANCE------------------');

class Shape{
    constructor(name) {
        this.name = name;
        this.shapesStore = [];
    }
    getName(){
        console.log(this.name);
    }
     seeStorage(){
       console.log(this.shapesStore);
    }


}

class Rectangle extends Shape{
    constructor(width,height){
        super();
        this.width = width;
        this.height = height;
        this.name = 'Rectangle'
    }
    calculateArea(){
        return this.width*this.height;
    }
    calculatePerimeter(){
        return (this.height+this.width)*2;
    }
}

let pryamoug = new Rectangle(4,5);
console.log(pryamoug.calculateArea());
console.log(pryamoug.calculatePerimeter());
pryamoug.getName();
pryamoug.seeStorage();

class Square extends Rectangle{
    constructor(sideLength){
        super();
        this.name = 'Square';
        this.width = this.height= sideLength;
    }
}


let kvadrat = new Square(5);
console.log(kvadrat.calculateArea());
console.log(kvadrat.calculatePerimeter());
kvadrat.getName();
kvadrat.seeStorage();

let kvadrat2 = new Square(4);
kvadrat2.seeStorage();




console.log('-------------------INHERITANCE------------------');

class Shape{
    constructor(name) {
        this.name = name;
    }
}

class Rectangle extends Shape{
    constructor(width,height){
        super();
        this.width = width;
        this.height = height;
        this.name = 'Rectangle';
        this.shapesStore = [];
        this.shapesStore.push([this.width,this.height]);

    }
    calculateArea(){
        return this.width*this.height;
    }
    calculatePerimeter(){
        return (this.height+this.width)*2;
    }
    calculateAllPerimeter(){
        console.log(this.shapesStore);
        let test = 0;
        this.shapesStore.forEach(function (elem){
           return test =+ elem.reduce((function (acc,cur) {
               console.log(acc,cur);
                return acc + cur*2;
            }),0);

        });
        console.log(test);
        return test;
    }
}

let pryamoug = new Rectangle(4,5);
console.log(pryamoug.calculateArea());
console.log(pryamoug.calculatePerimeter());



let pryamoug2 = new Rectangle(3,4);

console.log(pryamoug2.calculateAllPerimeter());

class Square extends Rectangle{
    constructor(sideLength){
        super();
        this.name = 'Square';
        this.width = this.height= sideLength;
        this.shapesStore = [[sideLength]];
    }
}


let kvadrat = new Square(5);
console.log(kvadrat.calculateArea());
console.log(kvadrat.calculatePerimeter());

let kvadrat2 = new Square(4);




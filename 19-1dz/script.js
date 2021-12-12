class Circle {
    static createDefault() {
        return new Circle(10);
    }
    
    constructor(radius) {
        this.radius = radius;
    }

    square () {
        return Math.PI * this.radius**2;
    }
}

const result = new Circle(2);
const result2 = new Circle(21);
const result3 = new Circle(34);
const result4 = new Circle(15);
const result5 = new Circle(13);
const result6 = Circle.createDefault();

console.log(result6);
console.log(result6.square)
console.log(result.square());
console.log(result2.square());
console.log(result3.square());
console.log(result4.square());
console.log(result5.square());

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  calcCircumference() {
    let circumference = Math.round(this.radius * 2 * Math.PI * 100) / 100;

    console.log("The circumference of the circle is " + circumference);
    return circumference;
  }
  calcArea() {
    let area = Math.round(this.radius * this.radius * Math.PI * 100) / 100;
    console.log("The area of the circle is " + area);
    return area;
  }
  static sortCircles() {
    circleArray.sort((a, b) => {
      if (a.radius > b.radius) {
        return 1;
      }
      if (b.radius > a.radius) {
        return -1;
      }
      if ((a.radius = b.radius)) {
        return 0;
      }
    });
  }
  calcAreaOfSquare() {
    let circleArea = this.calcArea();
    let squareArea =
      Math.round(
        ((this.radius + this.radius) * (this.radius + this.radius) -
          circleArea) *
          100
      ) / 100;
    console.log(
      "The area of the square, with the area of the circle subtracted, is: " +
        squareArea
    );
    return squareArea;
  }
}

let circle1 = new Circle(4);
let circle2 = new Circle(7);
let circle3 = new Circle(2);
let circle4 = new Circle(5);
let circle5 = new Circle(8);
let circle6 = new Circle(2);

circle1.calcCircumference();

let circleArray = [circle1, circle2, circle3, circle4, circle5, circle6];
console.log(circleArray);

Circle.sortCircles();

console.log(circleArray);

circle1.calcAreaOfSquare();

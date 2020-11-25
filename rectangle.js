class Rectangle {
  constructor(width = 6, height = 4) {
    this.width = width;
    this.height = height;
  }
  calcArea() {
    return this.width * this.height;
  }
}

let rectangle = new Rectangle(4, 5);

class Square extends Rectangle {
  constructor(width) {
    super(width);
  }
  calcArea() {
    return this.width * this.width;
  }
}

let square = new Square(2);
console.log(square.calcArea());

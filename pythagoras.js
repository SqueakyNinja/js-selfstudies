class Triangle {
  constructor(width, height, angleBetweenWidthAndHeight) {
    this.width = width;
    this.height = height;
    this.angleBetweenWidthAndHeight = angleBetweenWidthAndHeight;
  }
  // Måste veta om det är en rätsidig triangel för att kunna använda cos, sin, tan.
  // Måste använda cos, sin, tan för att ta reda på vinklar i en rätsidig triangel...
  // Vet inte vilka egenskaper man ska ge klassen för att få det att funka...
  rightAngled() {}
  calcHypotenuse() {
    let hypotenuse = Math.sqrt(
      Math.pow(this.width, 2) + Math.pow(this.height, 2)
    );
    console.log(hypotenuse);
  }
}

let triangle1 = new Triangle(140, 150);

triangle1.calcHypotenuse();

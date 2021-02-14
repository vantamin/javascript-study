class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get area() {
    return this.calcArea();
  }

  calcArea() {
    return this.width * this.height;
  }
}

const square = new Rectangle(10, 10);

console.log(square.area);

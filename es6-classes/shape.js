/* exported Shape */

class Shape {
  constructor(area, perimeter) {
    this.area = area;
    this.perimeter = perimeter;
  }

  describe() {
    return `area: ${this.area}, perimeter: ${this.perimeter}`;
  }
}

const shape1 = new Shape(15, 15);
console.log('Shape:\n', shape1.describe());

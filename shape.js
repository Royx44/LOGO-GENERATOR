

// Define the Triangle class
export class Triangle {
    constructor(base, height) {
      this.base = base;
      this.height = height;
    }
  
    calculateArea() {
      return 0.5 * this.base * this.height;
    }
  }
  
  // Define the Circle class
  export class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  
    calculateArea() {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  // Define the Square class
  export class Square {
    constructor(side) {
      this.side = side;
    }
  
    calculateArea() {
      return this.side * this.side;
    }
  }
  
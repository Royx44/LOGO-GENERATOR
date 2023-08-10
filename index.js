
import { Triangle, Circle, Square } from './shape';

// Create instances of the classes and use their methods
const triangle = new Triangle(5, 10);
console.log('Triangle Area:', triangle.calculateArea());

const circle = new Circle(3);
console.log('Circle Area:', circle.calculateArea());

const square = new Square(4);
console.log('Square Area:', square.calculateArea());

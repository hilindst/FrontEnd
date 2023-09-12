CLASS

Methods
Static methods

Get Set methods
"getters" values that aren't set up with constructor, method
"setter" method: setting new values within an object

Private Class Fields: Properties/Methods
  -keep code from being broken by users...
declared class #value, can only be changed within class brackets
class Circle {
  #radius;
  constructor(radius) {
    this.#radius = radius;
  }
  getArea() {
    return Math.PI * this.#radius * this.#radius;
  }
  changeRadius(newRad){
    this.#radius = newRad;
  }
}
const circle = new Circle(5);
circle.changeRadius(6);
console.log(circle.getArea());
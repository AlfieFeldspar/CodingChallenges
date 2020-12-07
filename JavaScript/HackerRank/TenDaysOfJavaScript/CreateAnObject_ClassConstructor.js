/*
 * Complete the Rectangle function
 * a = length
 * b = width
 * OUTPUT: and OBJECT with keys length, width, perim, area
 */

 // First
function Rectangle(a, b) {
    let shape = {
        length: a,
        width: b,
        perimeter: 2*(a+b),
        area: a*b
    }
    return shape;
}
Rectangle(4,5)

// Second
function Rectangle(a, b) {
    return {
        length: a,
        width: b,
        perimeter: 2*(a+b),
        area: a*b
    }
}
Rectangle(4,5)

// We can use a constructor function to create an object in two steps:
// Define the object type by writing a constructor function. The strong convention here is for the function's name to be in UpperCamelCase.
// Use the new operator to create an instance of the object.
function Rectangle(a,b) {
    this.length = a;
    this.width = b;
    this.perimeter = 2*(a+b);
    this.area = a*b;
}
var rect = new Rectangle(a,b)

// OR BETTER
class Rectangle {
    constructor(a, b) {
      this.length = a;
      this.width = b;
      this.area = a * b;
      this.perimeter = 2 * (a + b);
    }
  }
var rect = new Rectangle(a,b)

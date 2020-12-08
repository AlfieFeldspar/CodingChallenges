class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}
/**  Write code that adds an 'area' method to the Rectangle class' prototype */
Rectangle.prototype.area = function () {
  return this.width * this.height;
};
/** Create a Square class that inherits from Rectangle and implement its class constructor */
class Square extends Rectangle {
  constructor(sideLength) {
    // links width, height to sideLength, sideLength
    super(sideLength, sideLength);
  }
}

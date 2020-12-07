/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */
class Polygon {
    constructor(sides) {
        this.perimeter = () => {
            return sides.reduce((a,b)=>a+b);
        }
    }
}

// Create a polygon with side lengths 3, 4, and 5
let triangle = new Polygon([3, 4, 5]);

// Print the perimeter
console.log(triangle.perimeter());
// 12

//OR
class Polygon {
    constructor(sides) {
        this.sides = sides
    }
    perimeter() {
        return this.sides.reduce((a,b)=>a+b)
    }
}
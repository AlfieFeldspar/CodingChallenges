/*
 * Complete the Rectangle function
 * a = length
 * b = width
 * OUTPUT: and OBJECT with keys length, width, perim, area
 */
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
function calculateArea(length, width) {
    let area = length * width;
    return area;
}

function calculatePerimeter(length, width) {
    let perimeter = 2 * (length + width);
    return perimeter;
}

let rectangleLength = 10;
let rectangleWidth = 20;
let rectangleArea = calculateArea(rectangleLength, rectangleWidth);
let rectanglePerimeter = calculatePerimeter(rectangleLength, rectangleWidth);

console.log('The area of the rectangle is ' + rectangleArea);
console.log('The length of the rectangle is ' + rectangleLength);
console.log('The width of the rectangle is ' + rectangleWidth);
console.log('The perimeter of the rectangle is ' + rectanglePerimeter);

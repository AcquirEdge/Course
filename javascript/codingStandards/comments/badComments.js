function calculateArea(length, width) {
    // multiply length and width
    return length * width;
}

function calculatePerimeter(length, width) {
    // adding length and width and multiplying the result by 2
    return 2 * (length + width);
}

// function which prints a rectangle's area and perimeter given a length and width
function logRectangleProperties(length, width) {
    var area = calculateArea(length, width); // calling calculateArea function
    var perimeter = calculatePerimeter(length, width); // calling calculatePerimeter function

    // printing area and perimeter
    console.log('Area: ' + area + ', Perimeter: ' + perimeter);
}

function calculateArea(length, width) {
    // Use the mathematical formula for area of a rectangle
    return length * width;
}

function calculatePerimeter(length, width) {
    // Use the mathematical formula for perimeter of a rectangle
    return 2 * (length + width);
}

// function which prints a rectangle's area and perimeter given a length and width
function logRectangleProperties(length, width) {
    var area = calculateArea(length, width); // Utilizing helper function calculateArea
    var perimeter = calculatePerimeter(length, width); // Utilizing helper function calculatePerimeter

    // Logging the calculated values for a user's visual reference
    console.log('Area: ' + area + ', Perimeter: ' + perimeter);
}

/* 
    EXAMPLE 1
*/
// Function to calculate the area of a rectangle
function calculateArea(length, width) {
    return length * width;
}

let rectangleLength1 = 10;
let rectangleWidth1 = 20;
let rectangleArea1 = calculateArea(rectangleLength1, rectangleWidth1);
console.log('The area of the first rectangle is ' + rectangleArea1);

let rectangleLength2 = 15;
let rectangleWidth2 = 30;
let rectangleArea2 = calculateArea(rectangleLength2, rectangleWidth2);
console.log('The area of the second rectangle is ' + rectangleArea2);

let rectangleLength3 = 25;
let rectangleWidth3 = 50;
let rectangleArea3 = calculateArea(rectangleLength3, rectangleWidth3);
console.log('The area of the third rectangle is ' + rectangleArea3);

/* 
    EXAMPLE 2
*/
// Create a Book class to create new book objects.
class Book {
    constructor(title, author, pages, publishYear) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.publishYear = publishYear;
    }
    
    info() {
        return `${this.title} was written by ${this.author}. It has ${this.pages} pages and was published in ${this.publishYear}.`;
    }
}

let book1 = new Book("Book One", "Author One", 200, 1999);
console.log(book1.info());

let book2 = new Book("Book Two", "Author Two", 300, 2004);
console.log(book2.info());

let book3 = new Book("Book Three", "Author Three", 150, 2010);
console.log(book3.info());

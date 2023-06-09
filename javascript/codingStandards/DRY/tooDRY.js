/* 
    EXAMPLE 1
*/
// Function to calculate rectangle area and log it to the console
function calculateAreaAndLog(length, width) {
    let area = length * width;
    console.log('The area of the rectangle is ' + area);
    return area;
}

let rectangleLength1 = 10;
let rectangleWidth1 = 20;
calculateAreaAndLog(rectangleLength1, rectangleWidth1);

let rectangleLength2 = 15;
let rectangleWidth2 = 30;
calculateAreaAndLog(rectangleLength2, rectangleWidth2);

let rectangleLength3 = 25;
let rectangleWidth3 = 50;
calculateAreaAndLog(rectangleLength3, rectangleWidth3);

/* 
    EXAMPLE 2
*/
// This class prints out the book info inside the constructor
class Book {
    constructor(title, author, pages, publishYear) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.publishYear = publishYear;
        console.log(this.info());
    }
    
    info() {
        return `${this.title} was written by ${this.author}. It has ${this.pages} pages and was published in ${this.publishYear}.`;
    }
}

let book1 = new Book("Book One", "Author One", 200, 1999);
let book2 = new Book("Book Two", "Author Two", 300, 2004);
let book3 = new Book("Book Three", "Author Three", 150, 2010);

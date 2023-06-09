/* 
    EXAMPLE 1
*/
// Calculate the area of a rectangle
let rectangleLength1 = 10;
let rectangleWidth1 = 20;
let rectangleArea1 = rectangleLength1 * rectangleWidth1;
console.log('The area of the first rectangle is ' + rectangleArea1);

// Calculate the area of another rectangle
let rectangleLength2 = 15;
let rectangleWidth2 = 30;
let rectangleArea2 = rectangleLength2 * rectangleWidth2;
console.log('The area of the second rectangle is ' + rectangleArea2);

// Calculate the area of yet another rectangle
let rectangleLength3 = 25;
let rectangleWidth3 = 50;
let rectangleArea3 = rectangleLength3 * rectangleWidth3;
console.log('The area of the third rectangle is ' + rectangleArea3);


/* 
    EXAMPLE 2
*/
// Details of the first book
let book1Title = "Book One";
let book1Author = "Author One";
let book1Pages = 200;
let book1PublishYear = 1999;

function book1Info() {
    return `${book1Title} was written by ${book1Author}. It has ${book1Pages} pages and was published in ${book1PublishYear}.`;
}
console.log(book1Info());

// Details of the second book
let book2Title = "Book Two";
let book2Author = "Author Two";
let book2Pages = 300;
let book2PublishYear = 2004;

function book2Info() {
    return `${book2Title} was written by ${book2Author}. It has ${book2Pages} pages and was published in ${book2PublishYear}.`;
}
console.log(book2Info());

// Details of the third book
let book3Title = "Book Three";
let book3Author = "Author Three";
let book3Pages = 150;
let book3PublishYear = 2010;

function book3Info() {
    return `${book3Title} was written by ${book3Author}. It has ${book3Pages} pages and was published in ${book3PublishYear}.`;
}
console.log(book3Info());

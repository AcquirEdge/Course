let fn = "John";
let ln = "Walker";
let age = 39;
var person = {
    firstName: fn,
    lastName: ln, 
    age: age
}

var favoriteColors = ["Blue", "Green", "Red"];

function greet(name){
    console.log("Hello,", name);
}

function multiply(num1, num2){
    let product = num1 * num2;
    return product;
}

console.log(person, typeof person);
console.log(favoriteColors, typeof favoriteColors)
console.log(greet, typeof greet);

greet("Kevin");
console.log(multiply(54, 78));
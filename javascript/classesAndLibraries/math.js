function calculateArea(radius){
    // area = pi * r ^ 2
    return Math.PI * radius ** 2;
}

console.log(calculateArea(5))

function pythagorean(a, b){
    // a^2 + b^2 = c^2
    return Math.sqrt(a**2 + b**2);
}

console.log(pythagorean(3, 4))

const num = 7.12445531;
console.log(Math.floor(num));
console.log(Math.ceil(num));

const randomNum = Math.random();
const randomInt = Math.ceil(10 * Math.random());
console.log(randomInt);
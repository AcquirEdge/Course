const numbers = [1, 2, 3, 4, 5];
numbers.push(6, 7, 8);
// console.log(numbers);

const fruits = ['apple', 'banana'];
fruits.unshift('pear', 'grape');
// console.log(fruits);

let popped = numbers.pop();
// console.log(popped);
// console.log(numbers);a

let shifted = fruits.shift();
console.log(shifted);
console.log(fruits);
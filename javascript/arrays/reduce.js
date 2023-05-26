const numbers = [1, 2, 3, 4, 5];
// let total = 0; 
// for(number of numbers){
//     total = total + number;
// }
// console.log(total);

let sum = numbers.reduce((accumulator, element) => {
    return accumulator + element;
});
// console.log(sum);

const fruits = ['apple', 'banana', 'pear'];
let resultStr = fruits.reduce((accumulator, element) => {
    return accumulator + element + ","
}, "");
console.log(resultStr);
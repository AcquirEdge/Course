const colors = ['red', 'green', 'blue'];
const joined = colors.join(" ");
// console.log(joined);

const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];
// const combined = [...numbers1, ...numbers2]
const combined = numbers1.concat(numbers2, 7, 8);
console.log(combined);
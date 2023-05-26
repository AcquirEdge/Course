const numbers = [1, 2, 3, 4, 5]
const foundNumber = numbers.find((element) => {
    return element % 2 == 0;
});
console.log(foundNumber);

const foundIndex = numbers.findIndex((element) => {
    return element % 2 == 0;
})
console.log(foundIndex);
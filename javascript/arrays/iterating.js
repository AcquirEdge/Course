const multidimensional = [
    [1, 2, 3],
    [4, 5, 6]
]

for(let i = 0; i < multidimensional.length; i++){
    for(let j = 0; j < multidimensional[i].length; j++){
        // console.log(multidimensional[i][j]);
    }
}

const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(element, index, array) {
    // console.log(element, index, array);
});

const mapped = numbers.map((element) => {
    return element * 2
});
// console.log(mapped);

const filtered = numbers.filter((element) => {
    return element % 3 == 1;
});
console.log(filtered)
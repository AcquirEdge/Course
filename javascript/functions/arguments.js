function sum(name, ...numbers){
    console.log(name)
    let total = 0;
    for(number of numbers){
        total += number;
    }
    return total;
}

// console.log(sum("John", 1, 2, 45, 5));

let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]

let arr3 = [...arr1]
arr1[0] = 7
// console.log(arr3);

let obj1 = {
    key1: "value1",
    key2: "value2"
}

let obj2 = {
    key3: "value3",
    key4: "value4"
}

console.log({...obj1, ...obj2})
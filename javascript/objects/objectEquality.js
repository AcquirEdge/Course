let a = {
    name: "John",
    age: 30
}
let b = a;
let c = {
    name: "John",
    age: 30
}

// console.log(a === b);
// console.log(a === c); // false

function shallowEqual(obj1, obj2){
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length){
        return false;
    }
    for(let key of keys1){
        if(obj1[key] !== obj2[key]){
            return false;
        }
    }
    return true;
}

// console.log(shallowEqual(a, c));

let person1 = {
    name: "John",
    details: {
        age: 30,
        hair: "brown"
    }
}
let person2 = {
    name: "John",
    details: {
        age: 30,
        hair: "brown"
    }
}

console.log(shallowEqual(person1, person2));
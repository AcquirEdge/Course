let flatObject = {
    name: "John",
    age: 30,
    city: "New York"
}

let object = {
    name: "John",
    details: {
        age: 30, 
        city: "New York"
    }
}

let flatClone = {...flatObject};
flatClone.age = 35;
// console.log(flatClone);
// console.log(flatObject);

// let shallowClone = Object.assign({}, object);
// shallowClone.name  = "Jeff"
// shallowClone.details.age = 25;
// console.log(shallowClone);
// console.log(object);

let deepClone = JSON.parse(JSON.stringify(object));
deepClone.name = "James";
deepClone.details.age = 35;
console.log(deepClone);
console.log(object);
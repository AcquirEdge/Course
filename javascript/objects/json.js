let originalObject = {
    name: "John",
    age: 30,
    city: "New York"
}

let jsonString = JSON.stringify(originalObject);
console.log(jsonString);

let parsedObject = JSON.parse(jsonString);
console.log(parsedObject);

parsedObject.age = 35;
console.log(parsedObject);
let _ = require('lodash');

const complexObject = {
    name: "John Doe",
    age: 30,
    pets: [
        { type: 'dog', name: 'Fido' },
        { type: 'cat', name: 'Whiskers' },
        { type: 'goldfish', name: 'Goldie' },
        { type: 'bunny', name: 'Fluffy' },
    ],
    address: {
        street: "123 main st",
        city: "Springfield",
        country: "USA"
    }
}

const clonedObject = _.cloneDeep(complexObject);
console.log(clonedObject);
clonedObject.name = "Jane Doe";

console.log(_.isEqual(clonedObject, complexObject))

const cat = _.find(complexObject.pets, { type: 'cat' })
console.log(cat);
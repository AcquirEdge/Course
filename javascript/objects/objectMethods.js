let student = {
    name: "John Doe",
    age: 18,
    grade: "A"
}

// Use Object.keys()
console.log(Object.keys(student));

// Object.values()
console.log(Object.values(student));

let sourceStudent = {
    name: "John Edwards",
    age: 19,
    year: "freshman"
}

Object.assign(student, sourceStudent);
console.log(student);

let copied = Object.assign({}, student);
console.log(copied);
console.log(copied === student);
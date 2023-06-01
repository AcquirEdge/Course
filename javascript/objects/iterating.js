let student = {
    name: "John Doe",
    age: 18,
    grade: "A"
}

for(let key in student){
    console.log(student[key]);
}

let values = Object.values(student);
for(value of values){
    console.log(value);
}
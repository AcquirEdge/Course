function greet(name, formattingFunction){
    return formattingFunction(name);
}

// function lowerCase(name){
//     return name.toLowerCase();
// }

console.log(greet("ALICE", (name) => {
    return name.toLowerCase();
}));

function createAdder(num){
    let addFunction = function(num2){
        return num + num2;
    }
    return addFunction;
}

let add109 = createAdder(109);
// console.log(add109(7))
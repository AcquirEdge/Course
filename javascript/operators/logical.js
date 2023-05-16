let expr1 = 5 > 3; // true
let expr2 = 10 < 8; // false

//console.log(expr1 && expr2); // false
//console.log(expr1 || expr2); // true
//console.log(!expr1); // false

// console.log(!((expr1 && expr2) || (expr1 || expr2)));

function t(){
    console.log("returning true");
    return true;
}

function f(){
    console.log("returning false");
    return false;
}

// console.log(t() || t());

console.log(6 || "string");
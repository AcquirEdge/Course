function printProperties(obj, prefix = ""){
    for(let key in obj){
        // Base Case: 
        if(typeof obj[key] !== 'object'){
            console.log(prefix + key + ": " + obj[key])
        }
        // Recursive Case:
        else {
            printProperties(obj[key], prefix + key + ".")
        }
    }
}

let obj1 = {
    a: 1,
    b: 2,
    c: 3
}

let obj2 = {
    a: 1,
    b: {
        c: 2,
        d: 3,
        e: {
            f: 4,
            g: 5
        }
    }, 
    h: 6
}

// printProperties(obj1);
printProperties(obj2);
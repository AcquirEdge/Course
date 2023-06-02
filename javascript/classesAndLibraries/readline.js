let readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Please enter a number: ", (answer) => {
    console.log("double your answer is " + answer * 2);
    rl.close();
});
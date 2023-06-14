function factorial(n) {
    // Base Case:
    if(n <= 1){
        return 1;
    }
    // Recursive Case:
    else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(5));
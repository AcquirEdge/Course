// Attempt to calculate the average of an array of numbers
function calculateAverage(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        console.log('Input must be a non-empty array');
        return;
    }

    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
        console.log(sum) // debugging line
    }

    return sum / numbers.length;
}

let scores = [95, 85, 78, 92, 88, 90];
let averageScore = calculateAverage(scores);
console.log(`The average score is ${averageScore}`);

// Attempt to calculate the days until a person's next birthday
function calculateDaysUntilNextBirthday(currentDate, birthDate) {
    // If either one of the arguments aren't Date objects, then the code won't work
    if (!(currentDate instanceof Date) || !(birthDate instanceof Date)) {
        console.log('Both inputs must be Date objects');
        return;
    }
    
    // Creating a new date object to represent the next birthday of the person
    let nextBirthday = new Date(currentDate.getFullYear(), birthDate.getMonth(), birthDate.getDate());
    console.log(nextBirthday)
    
    // When we created our 'nextBirthday' Date object, we didn't account for if we already passed their birthday this year
    if (currentDate > nextBirthday) {
        nextBirthday.setYear(nextBirthday.getYear() + 1);
    }
    console.log(nextBirthday)
    
    // subtracting Date objects results in a number representing the milliseconds between them
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const diffDays = Math.round(Math.abs((currentDate - nextBirthday) / oneDay));
    
    return diffDays;
}

let currentDate = new Date(); // a Date object will instantiate with the current date if you do not provide one
let birthDate = new Date(1995, 11, 17); // Birthdate set to December 17, 1995

let daysUntilNextBirthday = calculateDaysUntilNextBirthday(currentDate, birthDate);
console.log(`There are ${daysUntilNextBirthday} days until your next birthday.`);
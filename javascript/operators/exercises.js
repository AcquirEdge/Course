function CelciusToFahrenheit(celcius) {
    let fahrenheit = celcius;
    fahrenheit *= 9;
    fahrenheit /= 5;
    fahrenheit += 32;
    console.log(fahrenheit);

    let kelvin = celcius;
    kelvin += 273.15;
    console.log(kelvin);
}

// CelciusToFahrenheit(100);

function inRange(num, upper, lower){
    let isBelow = num <= upper;
    let isAbove = num >= lower;
    let inTheRange = isBelow && isAbove;
    return inTheRange;
}

console.log(inRange(1, 10, 2));
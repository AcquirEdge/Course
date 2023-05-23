function suggestActivity(weather){
    if(weather === 'sunny'){
        console.log("Go for a swim");
    } else if(weather === 'rainy'){
        console.log("Read a book");
    } else if(weather === 'cloudy'){
        console.log("Go to a museum");
    } else if(weather === 'snowy'){
        console.log("Build a snowman");
    } else {
        console.log("Play board games");
    }
}

// suggestActivity('windy');

function fruitPrice(fruit){
    switch(fruit){
        case 'apple':
            return 1;
        case 'banana':
            return 0.75;
        case 'cherry':
            return 0.15;
        case 'date':
            return 0.55;
        default:
            return "Sorry, we don't have it today."
    }
}

// console.log(fruitPrice('orange'));

function multiplicationTable(num){
    for(let i = 1; i <= 10; i++){
        console.log(num * i);
    }
}

// multiplicationTable(7);

function countDown(n){
    while(n >= 1){
        console.log(n);
        n--;
    }
    console.log("Blast Off!")
}

// countDown(1);

function displayBookDetails(book){
    for(let key in book){
        console.log(key, ":", book[key]);
    }
}

let book = {
    title: "Random Book", 
    author: "Randm Author",
    year: 1960,
    genre: "fiction"
}

// displayBookDetails(book);

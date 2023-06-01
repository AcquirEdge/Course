let dog = {
    name: "Rex",
    breed: "Labrador",
    bark: function() {
        console.log("woof")
    }
}
dog.name = "Bones";
dog.age = 12;

function trick(trickName){
    console.log("The dog performs", trickName);
}

dog.doTrick = trick;
dog.bark();
dog.doTrick("roll over");
console.log(dog);
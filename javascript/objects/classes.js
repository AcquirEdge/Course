class Car {
    make;
    model;
    wheels = 4;
    constructor(makeInput, modelInput){
        this.make = makeInput;
        this.model = modelInput;
    }

    describe(){
        console.log(this.make, this.model)
    }
}

let myCar = new Car("Toyota", "Corolla");
myCar.describe();

let myCar2 = new Car("Honda", "Accord");
myCar2.describe();
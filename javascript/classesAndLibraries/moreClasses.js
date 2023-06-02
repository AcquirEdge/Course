class Employee {
    #name;
    #salary;
    #bonus = 500;

    constructor(name, salary){
        this.#name = name;
        this.#salary = salary;
    }

    get name() {
        return this.#name;
    }

    set name(newName) {
        this.#name = newName;
    }

    set salary(newSalary){
        if(newSalary < 0){
            throw "Salary must be positive"
        } else {
            this.#salary = newSalary;
        }
    }

    get totalSalary() {
        return this.#salary + this.#bonus;
    }

    introduce() {
        console.log("Hello, my name is " + this.#name);
    }
}

const employee = new Employee("John", 3000);

console.log(employee.name);
console.log(employee.salary);
console.log(employee.bonus);

employee.introduce();

employee.salary = -5000;

console.log(employee.totalSalary);
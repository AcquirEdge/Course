class BankAccount {
    static bankName = 'Bank of JavaScript';

    #accountHolder;
    #balance;

    constructor(accountHolder, balance = 0){
        this.#accountHolder = accountHolder;
        this.#balance = balance;
    }

    get accountHolder() {
        return this.#accountHolder;
    }

    get balance() {
        return this.#balance;
    }

    set balance(newBalance) {
        this.#balance = newBalance;
    }

    deposit(amount) {
        this.#balance += amount;
    }

    withdraw(amount) {
        if(amount > this.#balance) {
            throw new Error("Insufficient Balance!");
        }
        this.#balance -= amount;
    }

    static getBankName() {
        return BankAccount.bankName;
    }
}

class SavingsAccount extends BankAccount {
    #interestRate;

    constructor(accountHolder, balance, interestRate){
        super(accountHolder, balance);
        this.#interestRate = interestRate;
    }

    get interestRate() {
        return this.#interestRate;
    }

    set interestRate(newRate) {
        if (newRate < 0){
            throw new Error("Interest rate can not be negative!");
        }
        this.#interestRate = newRate;
    }

    applyInterest() {
        this.balance = this.balance + this.balance * this.#interestRate;
    }
}

class CheckingAccount extends BankAccount {
    #overdraftLimit;

    constructor(accountHolder, balance, overdraftLimit){
        super(accountHolder, balance);
        this.#overdraftLimit = overdraftLimit;
    }

    get overdraftLimit() {
        return this.#overdraftLimit;
    }

    set overdraftLimit(newLimit){
        if(newLimit < 0){
            throw new Error("Overdraft limit can not be negative");
        }
    }

    withdraw(amount){
        if(amount > this.balance + this.#overdraftLimit){
            throw new Error('Overdraft limit exceeded');
        }
        this.balance -= amount;
    }
}

const savings = new SavingsAccount("John", 1000, 0.01);
console.log(savings.accountHolder);
console.log(savings.balance);
savings.applyInterest();
console.log(savings.balance);

const checking = new CheckingAccount("Jane", 500, 200);
console.log(checking.accountHolder);
console.log(checking.balance);
checking.deposit(100);
console.log(checking.balance);
checking.withdraw(700);
console.log(checking.balance);


// let newAccount = new BankAccount("John", 1000);
// console.log(newAccount.balance);
// console.log(newAccount.accountHolder);
// console.log(BankAccount.bankName);

// newAccount.deposit(500);
// console.log(newAccount.balance);

// console.log(BankAccount.getBankName())
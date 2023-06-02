export default class BankAccount {
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
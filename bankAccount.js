class BankAccount {
  constructor(owner, amount = 0) {
    this.owner = owner;
    this.amount = amount;
    this.transactions = [];
  }
  addMoney(newAmount) {
    typeof newAmount == "number" ? (this.amount += newAmount) : "";
  }
  withdrawMoney(newAmount) {
    typeof newAmount == "number" ? (this.amount -= newAmount) : "";
  }
  printAccount() {
    console.log(this.owner, this.amount);
  }
  printTransactions() {
    console.log(this.transactions);
  }
}

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Transactions {
  constructor(fromAccount, toAccount, amount) {
    this.time = new Date();
    this.fromAccount = fromAccount;
    this.toAccount = toAccount;
    this.amount = amount;
    this.transferMoney(fromAccount, toAccount, amount);
  }
  transferMoney(fromAccount, toAccount, amount) {
    fromAccount.withdrawMoney(amount);
    toAccount.addMoney(amount);
    fromAccount.transactions.unshift(
      `${amount}kr to ${toAccount.owner.name} at ${this.time}`
    );
    toAccount.transactions.unshift(
      `${amount}kr from ${fromAccount.owner.name} at ${this.time}`
    );
  }
}

let person1 = new Person("Göran", 37);
let person2 = new Person("Bengt", 48);

let GöransAccount = new BankAccount(person1);
GöransAccount.addMoney(2000);

let BengtsAccount = new BankAccount(person2);
BengtsAccount.addMoney(1000);

let transaction1 = new Transactions(GöransAccount, BengtsAccount, 2000);
GöransAccount.printTransactions();
BengtsAccount.printTransactions();
BengtsAccount.printAccount();
GöransAccount.printAccount();
let transaction2 = new Transactions(BengtsAccount, GöransAccount, 1000);
GöransAccount.printTransactions();
BengtsAccount.printTransactions();
BengtsAccount.printAccount();
GöransAccount.printAccount();
console.log(transaction1);

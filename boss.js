class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Employee extends Person {
  constructor(name, age, salary) {
    super(name, age);
    this.salary = salary;
  }
}

class Boss extends Employee {
  constructor(name, age, salary, level) {
    super(name, age, salary);
    this.level = level;
  }
}

class Company {
  constructor(name) {
    this.name = name;
    this.employees = [];
  }
  listEmployees(list = this.employees) {
    for (let i = 0; i < list.length; i++) {
      let element = `
        ${list[i].name}, ${list[i] instanceof Boss ? "Chef" : "Anställd"}`;

      console.log(list[i]);
      console.log(element);
    }
  }
  listBosses() {
    let listOfBosses = this.employees.filter((x) => x instanceof Boss);
    for (let i = 0; i < listOfBosses.length; i++) {
      const element = listOfBosses[i].name;
      console.log(element);
    }
  }
  addEmployee(name, age, salary) {
    this.employees.push(new Employee(name, age, salary));
  }
  addBoss(name, age, salary, level) {
    this.employees.push(new Boss(name, age, salary, level));
  }
  salariesSum(list = this.employees) {
    let sum = list
      .map((x) => x.salary)
      .reduce((total, currVal) => total + currVal);
    console.log(sum);
    return sum;
  }
}

let company1 = new Company();

company1.listEmployees();
company1.addEmployee("Göran", 32, 30000);
company1.listEmployees();
company1.addBoss("Sven", 33, 60000, 9001);
company1.listEmployees();

company1.salariesSum();
company1.listBosses();

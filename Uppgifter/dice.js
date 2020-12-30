class Die {
  constructor(value) {
    this.value = value;
    this.throw();
  }
  throw() {
    this.value = Math.ceil(Math.random() * 6);
    // console.log(this.value);
    return this.value;
  }
}

// let newDie = new Die();
// let diceArray = [];
// for (let i = 0; i < 1000; i++) {
//   diceArray.push(newDie.throw());
// }
// console.log(diceArray);
// diceArray.sort();
// console.log(diceArray);

class Dice {
  constructor(noOfDice = 5) {
    this.dice = new Array(noOfDice);
    this.fillArray(noOfDice);
  }
  fillArray() {
    this.dice.fill(new Die());
  }
  throw() {}
}

let dice1 = new Dice(2);
dice1.throw();
// console.log(dice1);

class Dice2 {
  constructor(noOfDice = 5) {
    this.dice = [];
    for (let i = 0; i < noOfDice; i++) {
      let currentDice = new Die();
      this.dice.push(currentDice);
    }
  }

  throw() {
    for (let current_die of this.dice) {
      current_die.throw();
    }
    return this.dice.map((die) => die.throw());
  }
}

let dice2 = new Dice2();
// console.log(dice1);
// console.log(dice2.throw());
// console.log(dice2);

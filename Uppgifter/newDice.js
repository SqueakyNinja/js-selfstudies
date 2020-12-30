class Dice {
  constructor(idName) {
    this.id = document.getElementById(idName);
  }
  random() {
    return Math.round(Math.random() * 5 + 1);
  }
  throw() {
    return (this.id.innerHTML = this.random());
  }
}

let dice1 = new Dice("dice1id");
let dice2 = new Dice("dice2id");

let input = document.getElementById("testInput");

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    printFunction();
  }
});

function printFunction() {
  document.getElementById("testHeader").innerHTML = input.value;
}

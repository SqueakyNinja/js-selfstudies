// let randomNumber = Math.floor(Math.random() * 10 + 1);

function guessNumber() {
  let randomNumber = 2;
  let guessedNumber = Number(document.getElementById("number").value);

  console.log(guessedNumber);
  console.log(typeof guessedNumber);

  if (guessedNumber === randomNumber) {
    alert(`${guessedNumber} was correct!`);
  } else if (typeof guessedNumber !== "number") {
    alert("Try again with a NUMBER this time!");
  } else if (guessedNumber > randomNumber) {
    alert("Try again with a lower number :)");
  } else if (guessedNumber < randomNumber) {
    alert("Try again with a higher number :)");
  } else {
    alert("something else went wrong");
  }
  document.getElementById("number").value = "";
}

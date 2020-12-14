function calculateAge(input) {
  let birthday = new Date(input);
  let ageDifMs = Date.now() - birthday.getTime();
  let ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

document.addEventListener("DOMContentLoaded", function (event) {
  let submitBtn = document.getElementById("submitBtn");
  submitBtn.addEventListener("click", function (event) {
    event.preventDefault();

    console.log(calculateAge(document.getElementById("yobInput").value));
    console.log("Hello " + document.getElementById("nameInput").value);
    console.log(
      "You are " + calculateAge(document.getElementById("yobInput").value)
    ) + " years old";

    document.body.style.backgroundColor = document.getElementById(
      "colorInput"
    ).value;
  });
});

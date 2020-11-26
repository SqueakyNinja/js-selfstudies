function calcStringWords(string) {
  let newString = string.split(" ");
  for (let i = 0; i < newString.length; i++) {
    const element = newString[i];
    if (element === "") {
      newString.splice(i, 1);
      i--;
    }
  }
  console.log(newString.length);
}

calcStringWords(
  "provided as the first parameter in the method's call.          "
);

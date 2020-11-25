function reverseString(string) {
  let newString = "";
  for (let i = string.length; i >= 0; i--) {
    newString += string.charAt(i);
  }
  console.log(newString);
}

reverseString("Hallojsanhejsan");

function reverseString(string) {
  let newString = "";
  for (let i = string.length; i >= 0; i--) {
    newString += string.charAt(i);
  }
  return newString;
}

reverseString("Hallojsanhejsan");

function isPalindrome(string1) {
  let newString1 = string1.toLowerCase().replace(/\s+/g, "");
  let newString2 = reverseString(string1.toLowerCase().replace(/\s+/g, ""));
  console.log(newString1, newString2);
  if (newString1 === newString2) {
    console.log(string1 + " is a palindrome");
  } else {
    console.log(string1 + " is NOT a palindrome");
  }
}

isPalindrome("ni talar bra latin");
isPalindrome("Jag är inte ett palindrom");

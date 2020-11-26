function avgLettersPerWord(string) {
  let stringArray = string.split(" ");
  let totalValue = 0;
  for (let i = 0; i < stringArray.length; i++) {
    const element = stringArray[i].length;
    totalValue += element;
  }
  let avgLetters = Math.round((totalValue / stringArray.length) * 10) / 10;
  console.log(`The average length of a word in the string is ${avgLetters}`);
}

function shortestWord(string) {
  let stringArray = string.split(" ");
  stringArray.sort((a, b) => {
    if (a.length > b.length) {
      return 1;
    }
    if (a.length < b.length) {
      return -1;
    }
    if ((a.length = b.length)) {
      return 0;
    }
  });
  console.log(stringArray);
  for (let i = 0; i < stringArray.length - 1; i++) {
    const element = stringArray[i].length;
    let next = stringArray[i + 1].length;
    console.log(element);
    console.log(next);

    if (element < next) {
      console.log("lower");
      stringArray.splice(i + 1, 1);
      i--;
    } else if (element === next) {
      console.log("same");
    }
  }
  if (stringArray.length > 1) {
    console.log(
      `The shortest words in the string are: ${stringArray.join(", ")}`
    );
  } else {
    console.log(`The shortest word in the string is: ${stringArray}`);
  }
}

function longestWord(string) {
  let stringArray = string.split(" ");
  stringArray.sort((a, b) => {
    if (a.length < b.length) {
      return 1;
    }
    if (a.length > b.length) {
      return -1;
    }
    if ((a.length = b.length)) {
      return 0;
    }
  });
  console.log(stringArray);
  for (let i = 0; i < stringArray.length - 1; i++) {
    const element = stringArray[i].length;
    let next = stringArray[i + 1].length;
    console.log(element);
    console.log(next);

    if (element > next) {
      console.log("lower");
      stringArray.splice(i + 1, 1);
      i--;
    } else if (element === next) {
      console.log("same");
    }
  }
  if (stringArray.length > 1) {
    console.log(
      `The shortest words in the string are: ${stringArray.join(", ")}`
    );
  } else {
    console.log(`The shortest word in the string is: ${stringArray}`);
  }
}

function middlestWord(string) {
  let stringArray = string.split(" ");
  let middleWord = "";
  if (stringArray.length % 2 !== 0) {
    middleWord = stringArray[Math.floor(stringArray.length / 2)];
    middleWord += ", " + stringArray[Math.ceil(stringArray.length / 2)];
    console.log(`The middlest words are ${middleWord}`);
  } else {
    middleWord = stringArray[stringArray.length / 2 - 1];
    console.log(`The middlest word is ${middleWord}`);
  }
}

let string = "method returns a new string of the single";

// avgLettersPerWord(string);
// shortestWord(string);
// longestWord(string);
middlestWord(string);

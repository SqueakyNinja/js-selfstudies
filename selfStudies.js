// let age = 24;
// let firstName = "Rasmus";
// let lastName = "Tågerud";

// console.log(
//   "Jag heter " + firstName + " " + lastName + " och är " + age + " år."
// );

// console.log(typeof age);

// let x = 11;
// console.log(x / 3);
// console.log(Math.round(x / 3));
// console.log(Math.floor(x / 3));
// console.log(x % 3);

// let age = 21;
// let clothes = "nice";

// if (age >= 21 && clothes == "nice") {
//   console.log("Stig på!");
// } else if (age < 21 && clothes !== "nice") {
//   console.log(
//     "Tyvärr, du är för ung, och har inte tillräckligt fina kläder på dig"
//   );
// } else if (age < 21) {
//   console.log("Tyvärr, du är för ung.");
// } else if (clothes !== "nice") {
//   console.log("Tyvärr, du har inte tillräckligt fina kläder på dig");
// } else {
//   console.log("Något annat är fel");
// }

// let temperature = 14;

// if (temperature < 0) {
//   console.log("Det är kallt");
// } else if (temperature >= 0 && temperature <= 15) {
//   console.log("Det är okej varmt");
// } else if (temperature > 15) {
//   console.log("Det är varmt!");
// } else {
//   console.log("Något e fel");
// }

// let day = new Date();
// console.log(day.getDate());

// switch (day.getDate()) {
//   case 1:
//     console.log("Det är Måndag");
//     break;
//   case 2:
//     console.log("Det är Tisdag");
//     break;
//   case 3:
//     console.log("Det är Onsdag");
//     break;
// }

// for (let i = 0; i < 31; i++) {
//   if (i % 3 === 0 && i !== 0) {
//     console.log(i + " är delbart med 3!");
//   }
// }

// {
//   let i = 10;
//   while (i >= 0) {
//     console.log(i);
//     i--;
//   }
// }

// let students = ["Lisa", "Jessica", "Ali", "Stina"];

// for (let i = 0; i < students.length; i++) {
//   console.log(students[i]);
// }

// let vehicle = {
//   make: "saab",
//   model: "V4",
//   color: "beige",
// };

// console.log(vehicle.make.length);

// let course = {
//   students: [],
//   teacher: ["Micke"],
// };

// for (let counter = 1; counter < 11; counter++) {
//   console.log(counter);
// }

// function calcArea(a, b) {
//   area = a * b;
//   return area;
// }
// let areaOfBox = calcArea(2, 20);
// console.log("Rutan har en area på " + areaOfBox + "m2");

// FizzBuzz
// for (i = 0; i < 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// Jämför två tal
function calcBiggestNumber(a, b) {
  if (a > b) {
    console.log(a + " is bigger than " + b);
    return a;
  } else if (a < b) {
    console.log(b + " is bigger than " + a);
    return b;
  } else if (a == b) {
    console.log("The numbers are the same");
  }
}
// calcBiggestNumber(5, 4);

// Räkna ut skottår
function calcLeapYear(year) {
  if (year % 4 === 0 && year % 100 !== 0) {
    console.log(year + " is a leap year");
    return true;
  } else {
    console.log(year + " is NOT leap year");
    return false;
  }
}
// calcLeapYear(2012);

// Räkna ut skottår v2
function calcLeapYearTernary(year) {
  year % 4 === 0 && year % 100 !== 0 ? true : false;
}
// console.log(calcLeapYearTernary(2012));

// Räkna ut skottår del 2
function calcLeapYearSpan(start_year, end_year) {
  while (start_year <= end_year) {
    start_year % 4 === 0 && start_year % 100 !== 0
      ? console.log(start_year + " är ett skottår")
      : start_year + " är inte ett skottår";
    start_year++;
  }
}
// calcLeapYearSpan(2000, 2020);

// Tentaresultat
function decideTestResults() {
  let testResults = [40, 50, 60, 70, 80, 90, 55, 68, 74, 57];
  for (i = 0; i < testResults.length; i++) {
    if (testResults[i] > 100) {
      console.log(testResults[i] + " har nog fuskat...");
    } else if (testResults[i] >= 80) {
      console.log(testResults[i] + " är väl godkänd");
    } else if (testResults[i] < 80 && testResults[i] >= 50) {
      console.log(testResults[i] + " är godkänd");
    } else if (testResults[i] < 50) {
      console.log(testResults[i] + " är inte godkänd");
    }
  }
}
// decideTestResults();

//Tentaresultat v2
function randomizeTestResults(numberOfTests) {
  let testResults = [];
  for (i = 0; i < numberOfTests; i++) {
    testResults.push(Math.round(Math.random() * 100));
  }
  console.log(testResults);
  let vgResults = testResults.filter((number) => number >= 80);
  let gResults = testResults.filter((number) => number < 80 && number >= 50);
  let igResults = testResults.filter((number) => number < 50);
  vgResults.length > 0
    ? console.log(vgResults + " är väl godkända")
    : console.log("Ingen fick VG");
  gResults.length > 0
    ? console.log(gResults + " är godkända")
    : console.log("Ingen fick G");
  igResults.length > 0
    ? console.log(igResults + " är inte godkända")
    : console.log("Ingen fick IG");
}
// randomizeTestResults(5);

// Primtal v1
function calcPrime(i) {
  if (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0 && i > 1) {
    console.log(i + " är ett primtal");
  } else if (i === 2 || i === 3 || i === 5 || i === 7) {
    console.log(i + " är ett primtal");
  } else {
    console.log(i + " är INTE ett primtal");
    ("");
  }
}
// calcPrime(103);

// Primtal v2
function calcPrimes(number) {
  for (i = 0; i < number; i++) {
    if (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0 && i > 1) {
      console.log(i + " är ett primtal");
    } else if (i === 2 || i === 3 || i === 5 || i === 7) {
      console.log(i + " är ett primtal");
    } else {
      console.log(i + " är INTE ett primtal");
      ("");
    }
  }
}
// calcPrimes(100);

// Primtal v3
function calcPrimeLoop(number) {
  if (number === 0 || number === 1) {
    console.log(number + " är inte ett primtal");
  }
  for (i = 2; i <= number; i++) {
    if (number % i === 0 && number !== i) {
      console.log(number + " är jämnt delbart med " + i);
      break;
    } else if (number % i === 0 && number === i) {
      console.log(number + " är ett primtal");
    } else {
      ("");
    }
  }
}
// calcPrimeLoop(9);

// let library = [];

// let bookOne = {
//   name: "Lord of the rings",
//   pages: 1230,
//   genre: "Fantasy",
// };

// let bookTwo = {
//   name: "To kill a mockingbird",
//   pages: 281,
//   genre: "Thriller",
// };

// let bookThree = {
//   name: "Don Quixote",
//   pages: 642,
//   genre: "Novel",
// };

// library.push(bookOne, bookTwo, bookThree);

// function printTitle() {
//   library.forEach((currentBook) => {
//     console.log(currentBook.name);
//   });
// }

// printTitle();

let random = `Hej)(/!"&#)(%#adasdd9827/*++-/?!=¤)#?!")&("#%(/`;

function purgeTheUnworthy(string) {
  string = string.replace(/[^a-öA-Ö0-9]/g, "");
}

// function purgeTheUnworthy(string) {
//   let newString = "";
//   let allowed_chars =
//     "abcdefghijklmnopqrstuvwxyzåäöABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ0123456789 ";
//   for (let character of string) {
//     if (allowed_chars.includes(character)) {
//       newString += character;
//     }
//   }
//   console.log(newString);
// }
purgeTheUnworthy(random);

// let students = [];

// let studentOne = {
//   name: "Kalle",
//   age: 28,
//   preferedColor: "green",
// };
// let studentTwo = {
//   name: "Kalle",
//   age: 26,
//   preferedColor: "blue",
// };

// let studentThree = {
//   name: "Jennifer",
//   age: 29,
//   preferedColor: "yellow",
// };

// students.push(studentOne);
// students.push(studentTwo);
// students.push(studentThree);

// console.log(students.map((s) => s.name));
// console.log(students);

// students.sort(function (a, b) {
//   let nameA = a.name.toUpperCase();
//   let nameB = b.name.toUpperCase();
//   if (nameA < nameB) {
//     return -1;
//   }
//   if (nameA > nameB) {
//     return 1;
//   }
//   if (nameA == nameB) {
//     if (a.age < b.age) {
//       return -1;
//     }
//     if (a.age > b.age) {
//       return 1;
//     }
//     return 0;
//   }
// });
// console.log(students);
// students.map((student) => {
//   return student.name, console.log(student);
// });

let students = [
  {
    name: "Kalle",
    lastName: "Svensson",
    age: 28,
    preferedColor: "green",
  },
  {
    name: "Kalle",
    lastName: "Bengtsson",
    age: 26,
    preferedColor: "blue",
  },
  {
    name: "Jennifer",
    lastName: "olsson",
    age: 29,
    preferedColor: "yellow",
  },
];

let totalAge = students.reduce((sum, student) => sum + student.age, 0);

let filteredNames = students.reduce((filtered, s) => {
  if (s.age >= 27) {
    filtered.push(s.name);
  }
  return filtered;
}, []);
// console.log(filteredNames);

const studentNames = students.map((student) => student.name);

const studentAges = students.map((student) => student.age);

// uppgift 6
function calcTruth(a, b) {
  return (a > 0 && b < 0) || (a < 0 && b > 0);
}
// console.log(calcTruth(-1, 1));

// uppgift 7 v1
let numbers = [7, 8, 4, 2, 4, 6, 7, 9, 3, 4, 2, 4, 5];
const filteredNumbers = numbers.filter((n) => n % 2 !== 0);
const calcOddSum = filteredNumbers.reduce((oddSum, n) => {
  oddSum += n;
  return oddSum;
}, 0);
// console.log(calcOddSum);

// uppgift 7 v2
let numbersArray = [7, 8, 4, 2, 4, 6, 7, 9, 3, 4, 2, 4, 5];
const calcOddSumV2 = numbersArray.reduce((oddSum, n) => {
  if (n % 2 !== 0) {
    oddSum += n;
  }
  return oddSum;
}, 0);
// console.log(calcOddSumV2);

// Classes
class Subject {
  constructor(title = "", points = 0) {
    this.title = title;
    this.points = points;
  }
}

class Student {
  constructor(name = "", age = 0, subjects = []) {
    this.name = name;
    this.age = age;
    this.subjects = subjects;
  }
  greeting() {
    console.log("Hello " + this.name);
  }
  callMethod() {
    this.greeting();
  }
  addSubject(title, points) {
    this.subjects.push(new Subject(title, points));
  }
}

let student1 = new Student("Rasmus", 24);
// student1.callMethod();
// student1.addSubject("English", 20);
// student1.addSubject("Math", 40);
// console.log(student1);

class Vehicle {
  constructor(make, model, color, noOfWheels = 4) {
    this.make = make;
    this.model = model;
    this.color = color;
    this.noOfWheels = noOfWheels;
  }
}

class Motorcycle extends Vehicle {
  // constructor(make, model, color, noOfWheels = 2) {
  //   super(make, model, color, noOfWheels);
  // }
}

let car = new Vehicle("Volvo", "V70", "Blue");
// console.log(car);
let bike = new Motorcycle("Honda", "CBR650R", "Red");
// console.log(bike);

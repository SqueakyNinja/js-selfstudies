// var promise = new Promise(function (fulfill, reject) {
//   setTimeout(() => {
//     reject(new Error("REJECTED!"));
//   }, 300);
// });

// function onReject(error) {
//   console.log(error);
// }

// promise.then(onReject());

// function getUsers() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (true) {
//         resolve(1);
//         // resolve({
//         //   name: "Sven",
//         //   age: 20,
//         // });
//       } else {
//         reject({
//           status: 404,
//           msg: "not found",
//         });
//       }
//     }, 3000);
//   });
// }

// function second() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(2);
//     }, 1000);
//   });
// }
// function third() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(3);
//     }, 2000);
//   });
// }

// async function doStuff() {

//   try {
//     let result = await getUsers();

//     console.log(result);
//   } catch (error) {
//     console.log("något gick fel!", error);
//   }

//   console.log("Har vi börjat hämta?");
// }

// function doStuff() {
//   getUsers().then((data) => {
//     console.log(data);
//   });

//   second().then((data) => {
//     console.log(data);
//   });

//   third().then((data) => {
//     console.log(data);
//     done();
//   });

//   Promise.all([getUsers, second, third]).then((responses) => {
//     done();
//   });
// }

// function done() {
//   console.log("Nu är jag helt klar!");
// }

// // doStuff();

// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, "foo");
// });

// Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// });

// var promise = new Promise(function (fulfill, reject) {
//   setTimeout(() => {
//     reject(new Error("REJECTED!"));
//   }, 300);
// });

// function onReject(error) {
//   console.log(error.message);
// }

// promise.then(undefined, onReject);
// // promise.catch(onReject);
document.querySelector("button").addEventListener("click", () => {
  //   console.log(first, last, email);

  // Now, let's do the same thing, but with from API.
  fetch("https://randomuser.me/api/")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.results[0].name.first);
      // Do something with data.
    });
});

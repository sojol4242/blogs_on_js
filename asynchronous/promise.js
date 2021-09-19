// // promise in javascript
// const hasMeet = false;
// const meet = new Promise((resolve, reject) => {
//   // code
//   if (!hasMeet) {
//     const meetingDetails = {
//       name: "Interview",
//       medium: "Zoom",
//       time: "10:10 PM",
//     };
//     resolve(meetingDetails);
//   } else {
//     reject(new Error("Meeting already done"));
//   }
// });

// use of promise with then and catch block
meet
  .then((res) => {
    // resolve
    console.log(JSON.stringify(res));

  })
  .catch((err) => {
    // reject
    console.log("error",err.message);
  });
// promise all and race
const promise = Promise.resolve(`Promise 1 Resolved`);
const promise1 = new Promise((resolve, reject) => {
  setInterval(() => {
    resolve("Promise 1 resolved");
  }, 2000);
});

// promise.then((res) => console.log(res));
// promise1.then((res) => console.log(res));
// work with all promise and return all promises
Promise.all([promise1, promise]).then((res) => console.log(res));
// work with all promise but return the winner
Promise.race([promise1, promise]).then((res) => console.log(res));

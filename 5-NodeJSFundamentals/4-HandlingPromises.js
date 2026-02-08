// Handling promises

// function wrappedPromise() {
//   return new Promise((resolve) => {
//     console.log("Inside Promise executor");
//     // 
//     resolve("done"); // PCB
//   });
// }

// Promise.resolve().then(() => { // P1
//     console.log("Promise Callback");   
// })

// wrappedPromise()
//     .then((val) => console.log("Promise then:", val));

// console.log("End of script");


// function wrappedPromise() {
//   return new Promise((resolve) => {
//     console.log("Inside Promise executor");

//     process.nextTick(() => {
//       console.log("process.nextTick inside Promise");
//     });

//     setTimeout(() => {
//       console.log("setTimeout inside Promise");
//     }, 0);

//     Promise.resolve().then(() => {
//       console.log("Promise.then inside Promise");
//     });

//     resolve("done");
//   });
// }

// wrappedPromise().then((val) => console.log("Promise then:", val));

// console.log("End of script");



function wrappedPromise() {
  return new Promise((resolve) => {
    console.log("Inside Promise executor");

    process.nextTick(() => {
      console.log("process.nextTick inside Promise");
    });

    setTimeout(() => {
      console.log("setTimeout inside Promise");
    }, 0);

    Promise.resolve().then(() => {
      console.log("Promise.then inside Promise");
      Promise.resolve().then(() => {
        console.log("Nested Promise.then");
      });  
    });

    resolve("done");
  });
}

wrappedPromise().then((val) => console.log("Promise then:", val));

console.log("End of script");

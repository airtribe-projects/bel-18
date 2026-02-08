// Example 1

// setTimeout(() => {  // T1
//     console.log("Main Timer")
// }, 0)


// Promise.resolve().then(() => { // P1
//     console.log("Promise Callback");   
// })

// console.log("Main script");

// process.nextTick(() => console.log('process.nextTick'));


// Example 2

// setTimeout(() => { // T1
//     console.log("Main Timer")
// }, 0)

// // NT1
// process.nextTick(() => console.log('process.nextTick 1'));

// // P1
// Promise.resolve().then(() => {
//     console.log("Promise Callback 1");   

// })

// // NT2
// process.nextTick(() => console.log('process.nextTick 2'));

// // P2
// Promise.resolve().then(() => {
//     console.log("Promise Callback 2");   

// })

// console.log("Main script");

// Example 3:
setTimeout(() => { // T1
    console.log("T1")
    Promise.resolve().then(() => {  // P1
        console.log("P1");   
        process.nextTick(() => console.log('NT 1'));
    })
    process.nextTick(() => console.log('NT 2'));
}, 0)

setTimeout(() => { // T2
    console.log("T2")
    process.nextTick(() => console.log('NT 3'));
}, 0)


console.log("Main script");

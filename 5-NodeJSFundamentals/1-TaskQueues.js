// Code execution via call stack 
// const C = () => console.log("C");

// const B = () => {
//     console.log("B");
//     C();
// }
// const A = () => {
//     console.log("A");
//     B();
// }

// A();

// EventLoop and Queues
// main =  () => {
//     setTimeout(() => { // T3
//         console.log("Main Timer 3")
//     }, 50)

//     setTimeout(() => { // T1
//         console.log("Main Timer 1")
//     }, 20)

//     setTimeout(() => { // T2
//         console.log("Main Timer 2")
//     }, 30)


//     console.log("Main script");
// }

// main();

// Nested Promise and Timeouts
// const main = () => {
//     setTimeout(() => { // T3
//         console.log("MT 3")
//         Promise.resolve().then(() => {  //P2
//             console.log("PC 2");   
//             setTimeout(() => { // T4
//                 console.log("MT 4")
//             }, 0)
//         })
//     }, 0)

//     Promise.resolve().then(() => {  //P1
//         console.log("PC 1");   
//         setTimeout(() => { // T1
//             console.log("MT 1")
//         }, 0)
//     })

//     setTimeout(() => { // T2
//         console.log("MT 2")
//     }, 0)

//     console.log("MS");
// } 

// main()


// Example: Loop
// for (let i=0; i< 10; i++) {
//     setTimeout(() => {
//         console.log(`MT ${i}`)
//     }, 0)


//     Promise.resolve().then(() => {
//         console.log(`PC ${i}`);   
//     });
// }


setTimeout(() => {
    console.log("Main Timer")
}, 0)


Promise.resolve().then(() => {
    console.log("Promise Callback");   
    Promise.resolve().then(() => {
        console.log("Resolved inner promise");   
    })
})

console.log("Main script");



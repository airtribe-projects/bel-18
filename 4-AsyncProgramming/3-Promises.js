// Promises
// -> Value that gives you a guarantee that something would be avaialble now, or in future
// -> You get something to hold on to

// States Promises
// PENDING ---> SETTLED 
//           --> FULFILLED / REJECTED

const asyncFunction1 = () => {    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Response 1'); 
            resolve(100);
        }, 0);
    }); 
}


const asyncFunction2 = () => {    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Response 2'); 
            reject();
        }, 0);
    }); 
}

const asyncFunction3 = () => {    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Response 3'); 
            resolve();
        }, 0);
    }); 
}




// const start = async () => {
//     console.log('Start');   
//     const asyncResponse = asyncFunction1();
//     asyncResponse
//         .then(() => {
//             asyncFunction2()
//                 .then(() => {
//                     asyncFunction3().then(() => {
//                         console.log("Reached end");
//                     }) 
//             })
//         })
//         // .catch(() => {
//         //     console.log("Some error occured", asyncResponse);
//         // })
//         // .finally(() => { 
//         //     console.log("Inside finally");
//         // })
//  }



// start();

// asyncFunction1()
//     .then(asyncFunction2)
//     .catch(() => {
//         console.log("Second promise failed");
//     })
//     .then(asyncFunction3)
//     .then(() =>{
//         console.log("Reached the end");
//     })
//     .catch(() => {
//         console.log("Something failed");
//     })

asyncFunction1().then((v) => console.log(v));
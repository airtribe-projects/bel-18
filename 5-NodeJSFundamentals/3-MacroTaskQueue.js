/*
6 Different phases (Macro Task Queue)
1. Timers Phase: setTimeout, setInterval (Devs have control)
2. Pending Callback Phase: TCP Errors, DNS Error, Low level system errors (Internal)
3. Idle / Prepare phase: Housekeeping, Internally used by system to maintain event loop phases (Internal)
4. Poll Phase: (Developers use it) 
    - Handles I/O events and related callbacks like FS Call, DB Calls, Socket Call
5. Check Phase: (developers use it)
    - setImmediate callbacks
6. Close Phase: (Developers)
    - Cleanup, Closing socket
    - Closing DB connection
    - Unlinking a file
*/


// MacroTask Queue Phases 
// const fs = require('fs');
// const tmp = fs.writeFile('./temp.txt', 'Hello', (err) => {      //WF // Phases 4
//   if (err) throw err;
//   console.log("Started writing file")  

  
//   setTimeout(() => {                            // Phase 1       
//     console.log('Log from timer');
//   }, 0);


//   setImmediate(() => {  // Phase 5
//     console.log('Log from SetImmediate');
//   })

    //   fs.unlink('temp.txt', (err) => {          // Phase 4     
    //     if (err) throw err;
    //     console.log('Log from close callback');
    //   });

    // fs.close(tmp, (err) => {
    //     if (err) throw err;
    //     console.log('Log from close');
    // })


// });



// 


// const fs = require('fs');

// fs.writeFile('./temp.txt', 'Hello', (err) => {      //WF // Phases 4
//   if (err) throw err;
//   console.log("Started writing file")  

//   process.nextTick(() => {
//     console.log("Inside NT");
//   })
  
//   setTimeout(() => {                            // Phase 1       
//     console.log('Log from timer');
//   }, 0);


//   setImmediate(() => {  // Phase 5
//     console.log('Log from SetImmediate');
//   })

// });


// Reading data from socket
// socket.on("data", chunk => {    // IO (Phase 4). 100KB
//   setImmediate(() => {
//     while (hasMoreWork(chunk)) {  // --> 1sec 
//         process(chunk);
//     }
//   }) 
  
//   while (hasMoreWork(chunk)) {  // --> 1sec 
//     process(chunk);
// }
  
// });


setTimeout(() => {
    console.log("Set Timeout");
}, 0);

// Post processing I/O
setImmediate(() => {
    console.log("Set Immediate");
});


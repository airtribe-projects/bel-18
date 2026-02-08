const internalCall = async () => {
    console.log("Internal log");
}

const main = async () => {
    setTimeout(() => {  // T1
        console.log('Log from timer');
    }, 0);
    
    Promise.resolve().then(() => {  // P1
        console.log("Hello there");
    })

    await internalCall();
    
    // P2
    process.nextTick(() => {
        console.log("From next Tick");

    })

    setTimeout(() => {
        console.log("This is the end");
    })

    console.log("Ultimate end");
}

main();

// Await treats the code following it as a diffrent promise
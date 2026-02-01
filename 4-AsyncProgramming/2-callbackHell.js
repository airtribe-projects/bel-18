const asyncFunction1 = (cb, err) => {    
    setTimeout(() => {
        console.log('Response 1'); 
        cb();
    }, 0);
}

const asyncFunction2 = (cb, err) => {    
    setTimeout(() => {
        console.log('Response 2'); 
        cb();
    }, 0);
}

const asyncFunction3 = (cb, err) => {    
    setTimeout(() => {
        console.log('Response 3'); 
        cb();
    }, 0);
}

// Code drifting towards right can be very complex in real world scenarios
// Very difficult to comprehend
const start = async () => {
    console.log('Start');   
    // Callback Hell / Pyramid of Doom
    asyncFunction1(() => {
        asyncFunction2(() => {
            asyncFunction3(() => {
                console.log("End");
            })
        })
    });
}

start();
/* Expected Output
    start
    response 1
    response 2
    response 3
    end
*/
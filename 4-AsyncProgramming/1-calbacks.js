const asyncFunction = (cb, err) => {
    
    setTimeout(() => {
        console.log('In between'); 
            cb();
            cb();
            cb();
    }, 0);
}


const start = async () => {
    console.log('Start');
    asyncFunction(() => {
        console.log("End");
    });
}

start();

/* Output
start
In between
end
*/

/* Approach 1: 
    - Wait till the timeour completes
1. Where is the callback function defined? start (calee function)
2. Where is the callback executed? async function (the called function)
*/
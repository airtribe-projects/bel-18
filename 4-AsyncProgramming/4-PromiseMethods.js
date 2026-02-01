const asyncFunction1 = () => {    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Response 1'); 
            reject(1);
        }, 500);
    }); 
}


const asyncFunction2 = () => {    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Response 2'); 
            resolve(2);
        }, 200);
    }); 
}

const asyncFunction3 = () => {    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Response 3'); 
            reject(3);
        }, 2);
    }); 
}

const start = () => {
    // const pAllResponse =  Promise.all([asyncFunction1(), asyncFunction2(), asyncFunction3()]);
    // console.log(pAllResponse);

    // pAllResponse
    //     .then((resolvedValue) => {
    //         console.log(resolvedValue)
    //     })
    //     .catch((err) => {
    //         console.log("Failed", err)
    //     })
  
    // Returns values as well as status of all the promises
    // const pAllSettledResponse =  Promise.allSettled([asyncFunction1(), asyncFunction2(), asyncFunction3()]);
    // console.log(pAllSettledResponse);
    // pAllSettledResponse
    //     .then(res => {
    //         console.log("success", res);
    //     })
    //     .catch(err => {
    //         console.log("error", err);
    //     })
    
    // Return the result of first fulfilled promise, ignores the rejected ones
    // const pAny = Promise.any([asyncFunction1(), asyncFunction2(), asyncFunction3()]);
    // console.log(pAny);
    
    // pAny
    //     .then(res => {
    //         console.log("success", res);
    //     })
    //     .catch(err => {
    //         console.log("error", err);
    //     })
    
    // Return the result of first settled promise
    const pRace = Promise.race([asyncFunction1(), asyncFunction2(), asyncFunction3()]);
    console.log(pRace);
    
    pRace
        .then(res => {
            console.log("success", res);
        })
        .catch(err => {
            console.log("error", err);
        })

}

start();
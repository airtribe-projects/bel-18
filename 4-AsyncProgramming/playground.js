/* Syntactical sugar over promises */

const asyncFunction1 = () => {    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Response 1'); 
            reject(1);
        }, 5000);
    }); 
}


const asyncFunction2 = () => {    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Response 2'); 
            resolve(2);
        }, 2000);
    }); 
}

const asyncFunction3 = () => {    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Response 3'); 
            resolve(3);
        }, 1000);
    }); 
}

const sum = (a, b) => a + b;

const subtract = async (a, b) => a - b;

const main = async () => {
    try {
        const resp1 = await asyncFunction1();
        console.log(resp1);
    } catch (e) {
        console.log("Error", e);
    }
    
    const resp2 = await asyncFunction2();
    console.log(resp2);

    const resp3 = await asyncFunction3();
    console.log(resp3);

    const total = await sum(5,2);
    console.log(total);

    const diff = await subtract(7,2);
    console.log(diff);
}


main();



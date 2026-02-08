
setTimeout(() => {
    console.log("setTimeout inside I/O");
})

function recursiveNextTick() {
    console.log("RNT");

    process.nextTick(recursiveNextTick);
}

function recursiveFunction() {
    recursiveFunction();
}

// recursiveNextTick();

recursiveFunction();


Promise.resolve().then(() => {
    console.log("Promise then");
})


console.log("Main Script");

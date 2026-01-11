/*
    function scope --> var
    block scope --> let, const
    global scope -->
    
    lexical scope --> 
    lexical --> "About words and their meaning"; 
    "A sentence is built from words. And the meaning of word could depend where it is in the sentence"
    "The value of variables is determined from where it appears rather than from where it runs"
*/

// Example 1:
// function f() {
//     const a = 10;

//     function x() {
//         // const a = 100;
//         console.log(a);
//     }
//     x();
// }

// f();


// Example 2: 
function f() {
    let privateVariable = 10;

    function logger() {
        console.log(privateVariable);
    }

    function update(value) {
        privateVariable = value;
    }

    return {update, logger};
}

const {update, logger} = f();
const {update: u2, logger: l2} = f();

logger()
l2()
update(100);
u2(1000);
logger();
l2()



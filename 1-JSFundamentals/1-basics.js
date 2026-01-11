// What is Javascript?
// Static Typed language 
// Dynamic type language

// C++ / Java 

// let name = "jay";

// name = 1;

// name = false;
// name = Symbol()


// Ways to declare a variable
// Gives you way to define a variable which could be reassigned
var firstName = "Jay";
let age = 30;

firstName = "JAY";
age = 34;

const isEligibleVoter  = true;
// Gives you a way where in the value of variable is written in stone
const city = "Bangalore";

// city = "Mumbai";

// Primitive Data type that is used to create unique immutable identifiers
const sym = Symbol("Jay"); 
const sym2 = Symbol("Jay");


// console.log(sym, sym2, sym == sym2);

// 
// null v/s undefined 

let name;


let address = null;

address = "Bangalore";

address = null;

console.log(name, address);

// if (age > 18) {
//     name = "Jay";
// }

// Conditionals
// if (9 > 10) {
//     console.log("False Information");
// } else {
//     console.log("Else Block");
// }

// if (9 > 10) {
//     console.log("False Information");
// } else if (50 > 100) {
//     console.log("Else if  Block");
// } else {
//     console.log("Else block")
// }

// Loops
// for (let i=1; i <=10; i++) {
//     console.log(i)
// }


// let x =  1;
// while(x <= 10) {
//     console.log(x);
//     x++;
// }

// Function

function greetMe(name) {
    return `Hello ${name}`;
}

console.log(greetMe("Jay"));

const welcome = (name) => {
    return `Hello ${name}`;
}

console.log(welcome("Jay"));
/* Hoisting
Process 

- variables are allocated the memory but not intialized 

*/

// Temporal Dead Zone
// Time delta between memory allocation and memory intialization
// console.log(isValidVoter);
// var name = "Jay"
// const age = 30
// let isValidVoter = true


/* Scope 
1. Global Scope
    - Variable would be accessible withing the entire file
2. Function Scope 
    - Variable would be accessible withing the defined function
3. Block Scope
    - Variables are accessible within the blocks in which they are defined (if, for while)

* var doesn't have block scope *
*/

var name = "Jay";

const age = 30;

function checkIsLegalToDrive() {
    var canDrive = age > 18;

    if (age >=18) {
        const isLegal = true;
        var isAdult = true;
        // console.log(isLegal, "Is Legal");
    }

    // console.log(canDrive, "Can drive");
    // Var has function scope. It doesn't have block scope
    console.log(isAdult, "Can drive");
    console.log(isLegal, "Is Legal");

    // isLegal has block scope hence it will error out
    // console.log(canDrive, isLegal, "Can drive");
}

checkIsLegalToDrive()

// CanDrive has function level scope, hence can't be accessed at global level
// console.log(canDrive);



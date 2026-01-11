// Execution Context --> Fancy word given in JS for an environment where your code runs

const age = 21;
var name = "Jay";

function checkIsLegalToDrive(name, age) {
    const canDrive = age > 18;
    return canDrive;
}

checkIsLegalToDrive();

/* 1. Creation Phase
    age --> Uninitialized
    name --> Undefined
    checkIsLegalToDrive
 2. Execution Phase
    age --> 24
    name --> "Jay"
    function checkIsLegalToDrive would be executed
*/


/* canDrive
    Creation Phase
    name
    age
    canDrive

    Execution Phase:
    name --> jay
    age --> 21
    canDrive  --> true

*/

// GCed once the function execution completes
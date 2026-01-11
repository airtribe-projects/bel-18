// const persons = [
//     { // Obj1
//         name: "Jay",
//         age: 30,
//         location: "Bangalore"
//     },
//     { // Obj 2
//         name: "Rajath",
//         age: 24,
//         location: "Pune"
//     }, 

//     { // Obj 3
//         name: "Swetal",
//         age: 28,
//         location: "Noida"
//     },
// ]


// const personsClone = [...persons];

// // clone[1] = 10;

// console.log(personsClone[1]);
// personsClone[1].location = "Mumbai";
// console.log(personsClone[1]);


// console.log(persons, personsClone);


const person = { 
    name: "Jay",
    age: 30,
    location: "Bangalore",
    bankAccounts:["ICICI", "HDFC", "SBI"]
}

const personClone = {...person};

personClone.age = 34;
personClone.bankAccounts[1] = "IOB";

console.log(person, personClone);




/* this
    - Who called the function, from where it was called.
    - The behaviour of this is also dependent on the environment, in Browser you will get Window at the highest level, In NodeJs you will get Global
*/

// Ex: 1
// const obj = {
//     name: "Jay",
//     greet: function() {
//         console.log(this);
//     }, 
// }

// obj.greet();
// const grt = obj.greet;
// grt()


// Ex: 2
// const outerThis = this;
// const obj2 = {
//     name: "Jay",
//     greet: function() {
//         console.log(this);
//     }, 
//     greetArrow: () => {
//         console.log(this);
//         console.log(outerThis === this);
//     }
// }

// // obj2.greet();
// // obj2.greetArrow();

// const grt = obj2.greet;
// grt()

// const grtArr = obj2.greetArrow;
// grtArr();


// Ex 3:
// const obj = {
//     name: "Jay",
//     greet: function() {
//         console.log(this);
//         const innerArrow = () => {
//             console.log(this);
//         }

//         innerArrow();
//     }
// }

// obj.greet();



// Example 4:
// 'use strict'

function normal() {
    const arrFn = () => {
        console.log(this);
    }
    arrFn();
}

// normal();
'use strict'
// console.log(this);

// const abc = {
//     name: "jay",
//     test: normal
// }
// abc.test()

/*
Environment         Location            Strict          console.log(this)
Browser             Top Level           No              Window
Browser             Function            No              Window
Browser             Top Level           Yes             Undefined
Browser             Function            Yes             Undefined
Node                Top Level           No              {} (module.exports)
Node                Function            No              Global
Node                Top Level           Yes             {} (module.exports)
Node                Function            Yes             undefined

In case of normal function, object left of "." becomes this
Arrow function dowsn't have implicit this, it takes this of its parent
*/

/* Call Apply bind */


// Ex 5:
// const obj = {
//     name: "Jay",
//     greet: function(place) {
//         console.log(`Hello ${this.name}`);
//     }, 
// }


// const person = {
//     name: "niyaz"
// }

// const person2 = {
//     name: "Suman"
// }


// const person3 = {
//     name: "Akshat"
// }



// const grt = obj.greet;
// grt();
// grt.call(person);
// grt.call(person2);
// grt.apply(person);
// grt.apply(person2);

// const greetings = grt.bind(person3);

// greetings();
// greetings();


// Ex6 
const obj = {
    name: "Jay",
    greet: function(place) {
        console.log(`Hello ${this.name} to ${place}`);
    }, 
}

const grt = obj.greet;
// grt("home");
const person = {
    name: "niyaz"
}

const person2 = {
    name: "Smriti"
}

// grt.call(person, "home");
// grt.apply(person, ["home"]);

const greeting = grt.bind(person);

greeting("home")
greeting.call(person2, "home");









// Creating Object Using Literals
// const car = {
//     make: "Toyota",
//     model: "Camry",
//     year: "2026", 
//     start: function(attr) {
//         console.log(`${this.make} ${this.model} is starting`)
//     }
// }

// car.start();

// putTheCarInGarage(car)

// What are the challenges that you forsee? 20K cars
// 1. Make a copy ==> Violates Dry
// 2. There is no uniformity
// 3. Can't reuse, not scalable
// 4. Extensibility


// function car (make, model, year) {
//     this.make = make;
//     this.model= model;
//     this.year = year; 
    
//     this.start =  function() {
//         console.log(`${this.make} ${this.model} is starting`)
//     }
// }


// // Using Constructor Function
// const mercedes = new car("Merc", "Benz", 2026);
// const swift = new car("Maruti", "Swift", 2025);
// mercedes.model = "Alto";
// console.log(mercedes);

// 1. Make a copy ==> Not
// 2. There is no uniformity ==> 
// 3. Reusable
// 4. Extensibility

// ES6
// Class keyword
class Car  {
    #make;
    constructor(make, model, year) {
        this.#make = make;
        this.model= model;
        this.year = year;     
    }
    
    start =  function() {
        console.log(`${this.make} ${this.model} is starting`)
    }
}

const mercedes = new Car("Merc", "Benz", 2026);
const swift = new Car("Maruti", "Swift", 2025);
mercedes.model = "Alto";
mercedes.#make = "Byd";
console.log(mercedes);


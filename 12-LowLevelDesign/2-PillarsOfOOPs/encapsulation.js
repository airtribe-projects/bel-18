/* Access Modifiers
    Public - Anyone can modify / call the attribute / function
    Protected - Class or childres of the class can modify / call the attribute / function
    Private - Can modify / be called inside the attribute / function

    JS just has suport for Public and Private, if using Class based syntax 
    TS has support for Protected
// @ts-ignore
*/
class Car  {
    #make;
    constructor(make, model, year) {
        this.#make = make;
        this.model= model;
        this.year = year;     
    }
    
    start =  function() {
        this.#injectFuelToEngine();
        console.log(`${this.make} ${this.model} is starting`)
    }

    #injectFuelToEngine = function () {
        console.log(`${this.make} ${this.model} is injecting fuel`)
    }


    stop =  function() {
        console.log(`${this.make} ${this.model} is Stoping`)
    }

    accelerate =  function() {
        console.log(`${this.make} ${this.model} is accelerating`)
    }
}


const mercedes = new Car("Merc", "Benz", 2026);
const swift = new Car("Maruti", "Swift", 2025);
mercedes.model = "Alto";
// mercedes.#make = "Byd";  // Saves us from unintended modification
mercedes.start()
mercedes.#injectFuelToEngine()

console.log(mercedes);


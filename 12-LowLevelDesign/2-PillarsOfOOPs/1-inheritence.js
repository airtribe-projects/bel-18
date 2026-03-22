class Car  {
    constructor(make, model, year) {
        this.make = make;
        this.model= model;
        this.year = year;     
    }
    
    start()  {
        this.injectFuelToEngine();
        console.log(`${this.make} ${this.model} is starting`)
    }

    injectFuelToEngine () {
        console.log(`${this.make} ${this.model} is injecting fuel`)
    }


    stop () {
        console.log(`${this.make} ${this.model} is Stoping`)
    }

    accelerate () {
        console.log(`${this.make} ${this.model} is accelerating`)
    }
}

// PetrolCar
// DieselCar
// EVCar

class DieselCar extends Car {
    #color; 
    constructor(make, model, year, engine, color) {
        super(make, model, year);
        this.engine = engine;
        this.#color = color;
    }
    
    start() {
        super.start();
        console.log("Diesel Car is starting");
    }

    cruiseControl() {
        console.log("Petrol Car is starting");
    }
}

const thar = new DieselCar("Mahindra", "Thar", 2026, "Diesel", "black");

thar.start()

// class Thar extends DieselCar {
//     #door = 3;
// }
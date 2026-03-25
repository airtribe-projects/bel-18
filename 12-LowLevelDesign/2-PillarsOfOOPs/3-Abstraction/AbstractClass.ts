abstract class Mover {
    make: string;
    model: string;

    constructor(make: string, model: string) {
        this.make = make;
        this.model = model;
    }

    stop(): void {
        console.log(`Stopping the vehicle: ${this.make} ${this.model}`);
    }
    // Method Overloading not supported in JS / TS
    // stop(p1:number) : void {

    // }

    abstract start(): void;
}

// We can't initialize Abstract classes
// const car = new Vehicle("Maruti", "Alto");

class Train extends Mover {
    public year;
    
    constructor(make: string, model: string, year: number) {
        super(make, model);
        this.year = year;
    }
    start() {
        console.log(`Starting the Airplane: ${this.make} ${this.model}`);
    }
}

// const brezza = new Train("Maruti", "Alto", 2025);

// brezza.stop();

// @ts-ignore
abstract class Vehicle {
    make: string;
    model: string;

    constructor(make: string, model: string) {
        this.make = make;
        this.model = model;
    }

    stop(): void {
        console.log(`Stopping the vehicle: ${this.make} ${this.model}`);
    }

    abstract start(): void;
}
// We can't initialize Abstract classes
// const car = new Vehicle("Maruti", "Alto");

// @ts-ignore

class Car extends Vehicle {
    public year;
    
    constructor(make: string, model: string, year: number) {
        super(make, model);
        this.year = year;
    }

}

const car = new Car("Maruti", "Alto");

car.start();

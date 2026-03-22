class Vehicle {
    make: string;
    model: string;

    constructor(make: string, model: string) {
        this.make = make;
        this.model = model;
    }

    stop(): void {
        console.log(`Stopping the vehicle: ${this.make} ${this.model}`);
    }

}

interface Driveable{
    start(): void;
}

interface Flyable{
    fly(): void;
}

class Bus extends Vehicle implements Driveable{
    start(): void {
        console.log(`Starting the car: ${this.make} ${this.model}`);
    }    
}

class Tesla extends Vehicle implements Driveable, Flyable {
    start(): void {
        throw new Error("Method not implemented.");
    }

    fly(): void {
        throw new Error("Method not implemented.");   
    }

}

class Bike extends Vehicle implements Driveable{
    
    start(): void {
        throw new Error("Method not implemented.");
    }
    
    pedle(): void {
        console.log(`Starting the car: ${this.make} ${this.model}`);
    }
}

class Boat extends Vehicle implements Driveable {
    start(): void {
        throw new Error("Method not implemented.");
    }

    cruise(): void {
        console.log(`Starting the car: ${this.make} ${this.model}`);
    }
}
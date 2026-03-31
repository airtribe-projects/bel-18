interface Engine {
    start(): void;
}

class PetrolEngineDIP implements Engine {
  start() {
    console.log("Petrol engine started");
  }
}

class DieselEngineDIP implements Engine {
  start() {
    console.log("Diesel engine started");
  }
}




class CarDIP {
  private engine: Engine;

  constructor(engine: Engine) {
    this.engine = engine;
  }

  startCar() {
    this.engine.start();
    console.log("Car started");
  }
}


// DIP is achieved via DI
const petrolEngineDIP = new PetrolEngineDIP();
const dieselEngineDIP = new DieselEngineDIP();


const maruti = new CarDIP(petrolEngineDIP);
maruti.startCar();


const mahindra = new CarDIP(dieselEngineDIP);
mahindra.startCar();



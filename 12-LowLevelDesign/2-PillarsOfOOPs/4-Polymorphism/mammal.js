class Animal {
    // Private field (only accessible inside the class)
    #name;
  
    constructor(name, sound) {
      this.#name = name;          // Private
      this.sound = sound;         // Public
    }
  
    // Public method
    speak() {
      console.log(`${this.#name} says ${this.sound}`);
    }
  
    // Getter for name (read-only access)
    getName() {
      return this.#name;
    }
  
    // Setter for name (controlled access)
    setName(newName) {
      if (typeof newName === 'string' && newName.length > 0) {
        this.#name = newName;
      } else {
        console.log('Invalid name!');
      }
    }
  }


class Mammal extends Animal {
  constructor(name, sound, type) {
    super(name, sound); // Call the parent (Animal) constructor
    this.type = type;
  }
  
  breathe() {
    super.breathe();
    console.log(`${this.name}  and ${this.type} is breathing... 🫁`);
  }
}


class Human extends Mammal {
    constructor(name, sound, type) {
        super( name, sound, type);
    }
    // Method Overriding
    speak(param1) {
        console.log("Human speaks in several languages");
    }
}


const jay = new Human("Jay", "Speaks English", "Human");
jay.speak();


// function add(p1, p2, p3){
//     // Implmentation
// }

// add(1,2);
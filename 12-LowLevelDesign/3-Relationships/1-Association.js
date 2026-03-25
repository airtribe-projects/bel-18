// In case of association the interaction is via object passing

class Bank {
    // person;
    constructor(name, person) {
        this.name = name;
    }
    
    openAccount(person) {
        console.log(`${person.name} opened an account at ${this.name}`);
    }

    provideLoan(person) {
        console.log(`${this.name} provided a loan to ${person.name}`);
    }
}

class Person {
    
    constructor(name) {
        this.name = name;
    }
}

// Jay, Mihir
// PNB, HDFC ==> Provide Loan
// 
const jay = new Person('Jay');
const PNB = new Bank('PNB');
const HDFC = new Bank('HDFC');


PNB.provideLoan(jay);
HDFC.provideLoan(jay);
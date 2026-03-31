class Address {
    constructor(street, city) {
        this.street = street;
        this.city = city;
    }
    
    getCity() {
        return this.city;
    }
}


// PM extends the scope and wants a capability to support multiple address (Work, Home)
class Customer {
    constructor(name, address, homeAddress) {
        this.name = name;
        this.address = address;
        this.homeAddress = homeAddress;
    }
    
    getAddress() {
        return this.address;
    }

    getCurrentAddress() {
        // 
        return this.homeAddress;
    }

}

// Has -A Weak
class Order {
    constructor(customer) {
        this.customer = customer;
    }
    
    printShipingCity() {
        console.log( this.customer.address.city);
    }
}

// Main code
const home = new Address("Noida Extension", "GTB Nagar");
const work = new Address("Bangalore East", "Bangalore");

const jay = new Customer("Jay", home, work)

const ord = new Order(jay)
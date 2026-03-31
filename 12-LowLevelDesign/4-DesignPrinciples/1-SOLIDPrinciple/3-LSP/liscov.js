class PaymentMethod {
    processPayment(amount) {
        console.log(`Processing payment of amount: ${amount}`);
    }
}

class CreditCardPayment extends PaymentMethod {
    processPayment(amount) {
        console.log(`Processing credit card payment of amount: ${amount}`);
    }
}

class DebitCardPayment extends PaymentMethod {      
    processPayment(amount) {
        console.log(`Processing debit card payment of amount: ${amount}`);
    }
}

class BitcoinPayment extends PaymentMethod {
    processPayment(amount) {
        console.log(`Processing bitcoin payment of amount: ${amount}`);
    }
}

// Breaks LSP
// class FreePayment extends PaymentMethod {
//     processPayment(amount) {
//        throw new Error("Free payment can't process payment");
//     }
// }

// Follow LSP
class FreePayment extends PaymentMethod {
    processPayment(amount) {
        console.log(`Processing Free payment. Nothing has been deducted. Processed Zero rupee order`);
    }
}



class OrderService {
    constructor(paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    createOrder(orderDetails) {
        console.log("Order created:", orderDetails);
        this.paymentMethod.processPayment(orderDetails.amount);
    }
}

// Main (business logic)
const creditCardPayment = new CreditCardPayment();
const order1 = new OrderService(creditCardPayment);
order1.createOrder({ amount: 100 });    

const FreePayment = new FreePayment();
const order2 = new OrderService(FreePayment);
order2.createOrder({ amount: 0 }); // Throw error, Broke the contract

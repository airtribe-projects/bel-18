// Olde Payment Service
// class PaymentService {
//     processPayment(paymentType, amount) {
//         // One of the biggest Anti pattern
//         if (paymentType == "creditcard") {
//             // Logic to process credit card payment
//             console.log("Processing credit card payment of amount:", amount);
//         } else if (paymentType == "debitcard") {
//             // Logic to process debit card payment
//             console.log("Processing debit card payment of amount:", amount);
//         } else if (paymentType == "bitcoin") {
//             // Logic to process bitcoin payment
//             console.log("Processing bitcoin payment of amount:", amount);
//         } else {
//             console.log("Invalid payment type");
//         }

//         console.log("Payment processed for order ID:", orderId);
//     }
// }

// abstract class or an interface
class PaymentMethod {
    processPayment(amount) {
        throw new Error("processPayment method should be implemented");
    }
}

class CreditCardPayment extends PaymentMethod {
    processPayment(amount) {
        // Logic to process credit card payment
        console.log("Processing credit card payment of amount:", amount);
    }
}

class DebitCardPayment extends PaymentMethod {
    processPayment(amount) {
        // Logic to process debit card payment
        console.log("Processing debit card payment of amount:", amount);
    }
}
class BitcoinPayment extends PaymentMethod {
    processPayment(amount) {
        // Logic to process bitcoin payment
        console.log("Processing bitcoin payment of amount:", amount);
    }
}


// New Payment Service

class PaymentService {
    constructor(paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    deductAmount(amount) {
        this.paymentMethod.processPayment(amount);
    }
}



// Main
const creditCardPayment = new CreditCardPayment();
const bitcoinPayment = new BitcoinPayment();
const debitCardPayment = new DebitCardPayment();
const paymentService = new PaymentService(creditCardPayment);
paymentService.deductAmount(1000);


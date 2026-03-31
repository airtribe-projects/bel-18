interface CreditCardPaymentProcessor {
    processCreditCard(amount: number): void;
}

interface DebitCardPaymentProcessor {
    processDebitCard(amount: number): void;
}

interface PayPalPaymentProcessor {
    processPayPal(amount: number): void;
}

interface BankTransferPaymentProcessor {
    processBankTransfer(amount: number): void;
}

class BillDeskISP implements CreditCardPaymentProcessor {
    processCreditCard(amount: number): void {
        console.log(`Processing credit card payment of ${amount} via BillDesk`);
    }
}

class RazorPayISP implements DebitCardPaymentProcessor, PayPalPaymentProcessor {
    processDebitCard(amount: number): void {
        console.log("Processing payment using DC");
    }
    processPayPal(amount: number): void {
        console.log("Processing payment using DC")
    }
}
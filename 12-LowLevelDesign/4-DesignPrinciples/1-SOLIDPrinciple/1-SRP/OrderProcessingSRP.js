class PaymentService {
    processPayment(orderId, paymentDetails) {
        // Logic to process payment
        console.log("Payment processed for order ID:", orderId);
    }
}

class NotificationService {
    sendEmailConfirmation(orderId, email) {
        // Logic to send email confirmation
        console.log("Email confirmation sent for order ID:", orderId, "to email:", email);
    }
}


class OrderProcessingService {
    constructor(paymentService, notificationService) {
        this.paymentService = paymentService;
        this.notificationService = notificationService;
    }

    createOrder(orderDetails) { 
        // 1. Validate Order Details
        // 2. Figure out appropriate offers --> Builder Pattern
        // 3. Recompute Order Total
        // 4. Save the order Packet in DB
        // 5. DeductPayment
        // 
        // Logic to create an order
        console.log("Order created:", orderDetails);
    }

    processPayment(orderId, paymentDetails) {
        // Logic to process payment
        this.paymentService.processPayment(orderId, paymentDetails);
        console.log("Payment processed for order ID:", orderId);
    }

    sendEmailConfirmation(orderId, email) {
        // Logic to send email confirmation
        this.notificationService.sendEmailConfirmation(orderId, email);
        console.log("Email confirmation sent for order ID:", orderId, "to email:", email);
    }
}

class District {
    
}
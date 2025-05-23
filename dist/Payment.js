"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
class Payment {
    constructor(paymentId, method, amount, isPaid) {
        this.paymentId = paymentId;
        this.method = method;
        this.amount = amount;
        this.isPaid = isPaid;
    }
    processPayment() {
        this.isPaid = true;
        console.log(`Processed ${this.method} payment of $${this.amount}`);
    }
}
exports.Payment = Payment;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
const User_1 = require("./User");
class Customer extends User_1.User {
    constructor(userId, name, email, password, address, phone) {
        super(userId, name, email, password);
        this.address = address;
        this.phone = phone;
    }
    placeOrder(order) {
        console.log(`Customer ${this.name} placed order ${order.orderId}`);
    }
    trackOrder(orderId) {
        console.log(`Tracking order ${orderId}`);
    }
}
exports.Customer = Customer;

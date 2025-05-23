"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryPerson = void 0;
const User_1 = require("./User");
class DeliveryPerson extends User_1.User {
    constructor(userId, name, email, password, vehicleType, isAvailable) {
        super(userId, name, email, password);
        this.vehicleType = vehicleType;
        this.isAvailable = isAvailable;
    }
    updateStatus(orderId, status) {
        console.log(`Updated order ${orderId} to ${status}`);
    }
}
exports.DeliveryPerson = DeliveryPerson;

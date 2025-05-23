"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
class Order {
    constructor(orderId, status, timestamp, foodItems) {
        this.orderId = orderId;
        this.status = status;
        this.timestamp = timestamp;
        this.foodItems = foodItems;
    }
    calculateTotal() {
        return this.foodItems.reduce((sum, item) => sum + item.price, 0);
    }
    updateStatus(newStatus) {
        this.status = newStatus;
    }
}
exports.Order = Order;

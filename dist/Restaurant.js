"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Restaurant = void 0;
class Restaurant {
    constructor(restaurantId, name, location) {
        this.restaurantId = restaurantId;
        this.name = name;
        this.location = location;
        this.menu = [];
    }
    addItem(item) {
        this.menu.push(item);
    }
    removeItem(itemId) {
        this.menu = this.menu.filter(i => i.itemId !== itemId);
    }
}
exports.Restaurant = Restaurant;

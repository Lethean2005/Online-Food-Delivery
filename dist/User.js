"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(userId, name, email, password) {
        this.userId = userId;
        this.name = name;
        this.email = email;
        this.password = password;
    }
    login() {
        console.log(`${this.name} logged in`);
        return true;
    }
    logout() {
        console.log(`${this.name} logged out`);
    }
}
exports.User = User;

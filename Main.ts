import { Customer } from "./src/Customer";
import { FoodItem } from "./src/FoodItem";
import { Order } from "./src/Order";
import { Payment } from "./src/Payment";

// Create customer
const customer = new Customer(1, "tullip", "tullip@mail.com", "1234", "PP", "01020304");
const customer1 = new Customer(2, "you", "you@mail.com", "1234", "PP", "01020305");
const customer2 = new Customer(3, "you", "you@mail.com", "1234", "PP", "01020304");
customer.login();
customer1.login();
customer2.login();

// Create food items
const burger = new FoodItem(1, "Burger", 5.99, "Beef burger");
const fries = new FoodItem(2, "Fries", 2.99, "Crispy fries");

// Place order
const order = new Order(1002, "Pending", new Date(), [burger, fries]);
customer.placeOrder(order);

// Process payment
const payment = new Payment(1, "Credit Card", order.calculateTotal(), false);
payment.processPayment();

customer.logout();
customer1.logout();
customer2.logout();

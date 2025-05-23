// main.ts
import { Customer } from "./src/Customer";
import { FoodItem } from "./src/FoodItem";
import { Order } from "./src/Order";
import { Payment } from "./src/Payment";
import { Location } from "./src/Location";
import { Restaurant } from "./src/Restaurant";

// Create customer
const customer = new Customer(1, "Thean", "thean@mail.com", "1234", "PP", "01020304");
customer.login();

// Create food items
const burger = new FoodItem(1, "Burger", 5.99, "Beef burger");
const fries = new FoodItem(2, "Fries", 2.99, "Crispy fries");

// Place order
const order = new Order(1001, "Pending", new Date(), [burger, fries]);
customer.placeOrder(order);

// Process payment
const payment = new Payment(1, "Credit Card", order.calculateTotal(), false);
payment.processPayment();

// Create restaurant with location
const loc1 = new Location(11.5564, 104.9282, "Phnom Penh");
const restaurant = new Restaurant(1, "G6 Khmer Food ", [loc1]);
restaurant.addItem(burger);
restaurant.addItem(fries);

console.log(`Restaurant "${restaurant.name}" has menu:`);
restaurant.menu.forEach(item => console.log(`- ${item.name}: $${item.price}`));

console.log(`Restaurant Location: ${restaurant.locations[0].toString()}`);

customer.logout();

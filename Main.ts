// // main.ts
// import { Customer } from "./src/Customer";
// import { FoodItem } from "./src/FoodItem";
// import { Order } from "./src/Order";
// import { Payment } from "./src/Payment";
// import { Location } from "./src/Location";
// import { Restaurant } from "./src/Restaurant";

// // Create customer
// const customer = new Customer(1, "tullip", "tullip@mail.com", "1234", "PP", "01020304");
// const customer1 = new Customer(2, "you", "you@mail.com", "1234", "PP", "01020305");
// const customer2 = new Customer(3, "you", "you@mail.com", "1234", "PP", "01020304");
// customer.login();
// customer1.login();
// customer2.login();

// // Create food items
// const burger = new FoodItem(1, "Burger", 5.99, "Beef burger");
// const fries = new FoodItem(2, "Fries", 2.99, "Crispy fries");
// const friedrice = new FoodItem(3, "Fried rice", 3, "Crispy fries");

// // Place order
// const order = new Order(1002, "Pending", new Date(), [burger, fries]);
// customer.placeOrder(order);

// // Process payment
// const payment = new Payment(1, "Credit Card", order.calculateTotal(), false);
// payment.processPayment();

// // Create restaurant with location
// const loc1 = new Location(11.5564, 104.9282, "Phnom Penh");
// const restaurant = new Restaurant(1, "G6 Khmer Food ", [loc1]);
// restaurant.addItem(burger);
// restaurant.addItem(fries);

// console.log(`Restaurant "${restaurant.name}" has menu:`);
// restaurant.menu.forEach(item => console.log(`- ${item.name}: $${item.price}`));

// console.log(`Restaurant Location: ${restaurant.locations[0].toString()}`);

// customer.logout();
// customer1.logout();
// customer2.logout();









import { Customer } from "./src/Customer";
import { FoodItem } from "./src/FoodItem";
import { Order } from "./src/Order";
import { Payment } from "./src/Payment";
import { Location } from "./src/Location";
import { Restaurant } from "./src/Restaurant";

// --- Order ID Generator ---
let orderIdCounter = 1;
function getNextOrderId() {
  return orderIdCounter++;
}

// --- Create Customers ---
const customersData = [
  { id: 1, name: "Tullip", email: "tullip@mail.com", password: "1234", idType: "PP", phone: "01020304" },
  { id: 2, name: "Alice", email: "alice@mail.com", password: "abcd", idType: "PP", phone: "01020305" },
  { id: 3, name: "Bob", email: "bob@mail.com", password: "abcd", idType: "PP", phone: "01020306" }
];

const customers = customersData.map(data => new Customer(data.id, data.name, data.email, data.password, data.idType, data.phone));
customers.forEach(customer => customer.login());

// --- Create Restaurants ---
const restaurantsData = [
  {
    id: 1,
    name: "G6 Khmer Food",
    locations: [{ lat: 11.5564, long: 104.9282, address: "Phnom Penh" }],
    menu: [
      { id: 1, name: "Burger", price: 5.99, description: "Beef burger" },
      { id: 2, name: "Fries", price: 2.99, description: "Crispy fries" }
    ]
  },
  {
    id: 2,
    name: "Noodle House",
    locations: [
      { lat: 11.5644, long: 104.9288, address: "Phnom Penh Riverside" },
      { lat: 11.5750, long: 104.9175, address: "Toul Tompong" }
    ],
    menu: [
      { id: 3, name: "Fried Rice", price: 3.5, description: "Egg fried rice" },
      { id: 4, name: "Noodle Soup", price: 4.0, description: "Hot noodle soup" }
    ]
  }
];

const restaurants = restaurantsData.map(rData => {
  const locations = rData.locations.map(loc => new Location(loc.lat, loc.long, loc.address));
  const restaurant = new Restaurant(rData.id, rData.name, locations);
  rData.menu.forEach(item => restaurant.addItem(new FoodItem(item.id, item.name, item.price, item.description)));
  return restaurant;
});

// --- Display Restaurants ---
restaurants.forEach(restaurant => {
  console.log(`\nRestaurant: ${restaurant.name}`);
  console.log("Locations:");
  restaurant.locations.forEach(loc => console.log(`- ${loc.toString()}`));
  console.log("Menu:");
  restaurant.menu.forEach(item => console.log(`- ${item.name}: $${item.price.toFixed(2)}`));
});

// --- Place Orders ---
const order1 = new Order(getNextOrderId(), "Pending", new Date(), [restaurants[0].menu[0], restaurants[0].menu[1]]);
customers[0].placeOrder(order1);

const order2 = new Order(getNextOrderId(), "Pending", new Date(), [restaurants[1].menu[0]]);
customers[1].placeOrder(order2);

const order3 = new Order(getNextOrderId(), "Pending", new Date(), [restaurants[1].menu[1]]);
customers[2].placeOrder(order3);

// --- Process Payments ---
const payment1 = new Payment(1, "Credit Card", order1.calculateTotal(), false);
payment1.processPayment();

// --- Logout Customers ---
customers.forEach(customer => customer.logout());

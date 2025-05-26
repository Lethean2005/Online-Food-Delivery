
import { Customer } from "./Customer";
import { FoodItem } from "./FoodItem";
import { Order } from "./Order";
import { Payment } from "./Payment";
import { Location } from "./Location";
import { Restaurant } from "./Restaurant";

let orderIdCounter = 1;
function getNextOrderId() {
  return orderIdCounter++;
}


const customersData = [
  { id: 1, name: "Tullip", email: "tullip@mail.com", password: "1234", idType: "PP", phone: "01020304" },
  { id: 2, name: "Ya", email: "ya@mail.com", password: "abcd", idType: "PP", phone: "0886601929" },
  { id: 3, name: "Bopha", email: "bopha@mail.com", password: "abcd", idType: "PP", phone: "013467389" }
];

const customers = customersData.map(data => new Customer(data.id, data.name, data.email, data.password, data.idType, data.phone));
customers.forEach(customer => customer.login());


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
    name: "Super House",
    locations: [
      { lat: 11.5644, long: 104.9288, address: "Phnom Penh River" },
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


restaurants.forEach(restaurant => {
  console.log(`\nRestaurant: ${restaurant.name}`);
  console.log("Locations:");
  restaurant.locations.forEach(loc => console.log(`- ${loc.toString()}`));
  console.log("Menu:");
  restaurant.menu.forEach(item => console.log(`- ${item.name}: $${item.price.toFixed(2)}`));
});


const order1 = new Order(getNextOrderId(), "Pending", new Date(), [restaurants[0].menu[0], restaurants[0].menu[1]]);
customers[0].placeOrder(order1);

const order2 = new Order(getNextOrderId(), "Pending", new Date(), [restaurants[1].menu[0]]);
customers[1].placeOrder(order2);

const order3 = new Order(getNextOrderId(), "Pending", new Date(), [restaurants[1].menu[1]]);
customers[2].placeOrder(order3);


const payment1 = new Payment(1, "Credit Card", order1.calculateTotal(), false);
payment1.processPayment();


customers.forEach(customer => customer.logout());

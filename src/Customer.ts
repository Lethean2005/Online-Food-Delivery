import { User } from "./User";
import { Order } from "./Order";

export class Customer extends User {
  constructor(
    userId: number,
    name: string,
    email: string,
    password: string,
    public address: string,
    public phone: string
  ) {
    super(userId, name, email, password);
  }

  placeOrder(order: Order) {
    console.log(`Customer ${this.name} placed order ${order.orderId}`);
  }

  trackOrder(orderId: number) {
    console.log(`Tracking order ${orderId}`);
  }
}

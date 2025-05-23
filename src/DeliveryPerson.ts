import { User } from "./User";

export class DeliveryPerson extends User {
  constructor(
    userId: number,
    name: string,
    email: string,
    password: string,
    public vehicleType: string,
    public isAvailable: boolean
  ) {
    super(userId, name, email, password);
  }

  updateStatus(orderId: number, status: string) {
    console.log(`Updated order ${orderId} to ${status}`);
  }
}

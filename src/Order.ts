import { FoodItem } from "./FoodItem";

export class Order {
  constructor(
    public orderId: number,
    public status: string,
    public timestamp: Date,
    public foodItems: FoodItem[]
  ) {}

  calculateTotal(): number {
    return this.foodItems.reduce((sum, item) => sum + item.price, 0);
  }

  updateStatus(newStatus: string) {
    this.status = newStatus;
  }
}

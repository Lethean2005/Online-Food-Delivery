import { FoodItem } from "./FoodItem";

export class Restaurant {
  public menu: FoodItem[] = [];

  constructor(
    public restaurantId: number,
    public name: string,
    public location: string
  ) {}

  addItem(item: FoodItem) {
    this.menu.push(item);
  }

  removeItem(itemId: number) {
    this.menu = this.menu.filter(i => i.itemId !== itemId);
  }
}

// src/Restaurant.ts
import { FoodItem } from "./FoodItem";
import { Location } from "./Location";

export class Restaurant {
  public menu: FoodItem[] = [];

  constructor(
    public restaurantId: number,
    public name: string,
    public locations: Location[]
  ) {}

  addItem(item: FoodItem) {
    this.menu.push(item);
  }

  removeItem(itemId: number) {
    this.menu = this.menu.filter(i => i.itemId !== itemId);
  }
}

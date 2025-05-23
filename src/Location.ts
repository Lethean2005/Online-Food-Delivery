// src/Location.ts
export class Location {
  constructor(
    public latitude: number,
    public longitude: number,
    public address: string
  ) {}

  getCoordinates(): string {
    return `${this.latitude}, ${this.longitude}`;
  }

  toString(): string {
    return `${this.address} (Lat: ${this.latitude}, Long: ${this.longitude})`;
  }
}

export class Payment {
  constructor(
    public paymentId: number,
    public method: string,
    public amount: number,
    public isPaid: boolean
  ) {}

  processPayment() {
    this.isPaid = true;
    console.log(`Processed ${this.method} payment of $${this.amount}`);
  }
}

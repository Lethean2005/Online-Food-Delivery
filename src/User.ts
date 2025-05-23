export class User {
  constructor(
    public userId: number,
    public name: string,
    public email: string,
    public password: string
  ) {}

  login(): boolean {
    console.log(`${this.name} logged in`);
    return true;
  }

  logout(): void {
    console.log(`${this.name} logged out`);
  }
}

export class MonForm {
  private _password: string;

  constructor(password: string) {
    this._password = password;
  }

  get password(): string {
    return this._password;
  }
}

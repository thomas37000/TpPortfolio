export class Ability {
  private _name: string;
  private _url: string;

  constructor(name: string, url: string) {
    this._name = name;
    this._url = url;
  }

  /**
   * Getter name
   * @return {string}
   */
  public get name(): string {
    return this._name;
  }

  /**
   * Getter url
   * @return {string}
   */
  public get url(): string {
    return this._url;
  }

  /**
   * Setter name
   * @param {string} value
   */
  public set name(value: string) {
    this._name = value;
  }

  /**
   * Setter url
   * @param {string} value
   */
  public set url(value: string) {
    this._url = value;
  }
}

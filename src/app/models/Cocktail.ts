// export class Recherche(model)
// private drink: Boisson[]

export class Cocktail {
  private _idDrink: number;
  private _strDrink: string; // nom cocktail
  private _strDrinkThumb: string; // image cocktail
  // private tableau de cocktails => à faire

  constructor(idDrink: number, strDrink: string, strDrinkThumb: string) {
    this._idDrink = idDrink;
    this._strDrink = strDrink;
    this._strDrinkThumb = strDrinkThumb;
  }

  /**
   * Getter idDrink
   * @return {number}
   */
  public get idDrink(): number {
    return this._idDrink;
  }

  /**
   * Getter strDrink
   * @return {string}
   */
  public get strDrink(): string {
    return this._strDrink;
  }

  /**
   * Getter strDrinkThumb
   * @return {string}
   */
  public get strDrinkThumb(): string {
    return this._strDrinkThumb;
  }

  /**
   * Setter idDrink
   * @param {number} value
   */
  public set idDrink(value: number) {
    this._idDrink = value;
  }

  /**
   * Setter strDrink
   * @param {string} value
   */
  public set strDrink(value: string) {
    this._strDrink = value;
  }

  /**
   * Setter strDrinkThumb
   * @param {string} value
   */
  public set strDrinkThumb(value: string) {
    this._strDrinkThumb = value;
  }
}

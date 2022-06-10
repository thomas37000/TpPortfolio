export class Saison {
    private _id: number;
    private _numero: number;
    private _image: string;
  
    constructor(id: number, numero: number, image: string) {
      this._id = id;
      this._numero = numero;
      this._image = image;
    }
  
    public get id(): number {
      return this._id;
    }
  
    public get numero(): number {
      return this._numero;
    }
  
    public set numero(value: number) {
      this._numero = value;
    }
  
    public get image(): string {
      return this._image;
    }
  
    public set image(value: string) {
      this._image = value;
    }
  }
  
import { Injectable } from '@angular/core';
import { Message } from '../models/Message';
import { Personne } from '../models/Personne';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  public count: number;

  public messages: Message[];

  constructor() {
    this.count = 0;

    let auteur1 = new Personne('Bob', 'Marley');
    let auteur2 = new Personne('Elvis', 'Presley');
    let message1 = new Message(auteur1, 'Salut ');
    let message2 = new Message(auteur2, 'Hello');

    this.messages = [message1, message2];
  }

  public countService(): void {
    console.log('services !');
    this.count = this.count++;
    console.log(this.count++);
  }

  public getMessages(): Message[] {
    return this.messages;
  }

  public getAuteurs(): Personne[] {
    let auteurs: Personne[];
    auteurs = [];

    for (const msg of this.messages) {
      auteurs.push(msg.auteur);
    }

    return auteurs;
  }

  public addMessage(newMsg: Message): void {
    this.messages.push(newMsg);
  }

  public searchArr(val: any): Message[] {
    // let newArr : Message[];// => je déclare un nouveau tableau
    // newArr = []; // => je l'initialise à vide

    let newArr: Message[] = []; // meilleur synthaxe

    for (const msg of this.messages) {
      // si la valeur que je cherche est dans le corps du message en cours
      if (msg.corps.search(val) !== -1) {
        // j'ajoute le message entier au nouveau tableau
        newArr.push(msg);
      }
    }

    return newArr;
  }
}
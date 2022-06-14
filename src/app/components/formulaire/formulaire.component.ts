import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/models/Message';
import { Personne } from 'src/app/models/Personne';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  public errorUser!: string;
  public errorMessage!: string;

  constructor(private svc: MessagesService) {}

  ngOnInit(): void {
    this.errorUser = 'Vous devez écrire votre nom pour valider le formulaire !';
    this.errorMessage =
      'Vous devez écrire un message pour valider le formulaire!';
  }

  public onSubmit(val: any): void {
    let newAuteur = val.auteur;
    let newMessage = val.message;
    console.log(val.value);
    // new MessageLabel(new Personne(nom, prenom), newMessage);
    let newMsg = new Message(new Personne('', newAuteur), newMessage);
    this.svc.addMessage(newMsg);
  }
}

import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/models/Personne';
import { MessagesService } from 'src/app/services/messages.service';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent  {
  public personnes!: Personne[];

  constructor(private svc: MessagesService) {
    this.personnes = this.svc.getAuteurs();
  }
}

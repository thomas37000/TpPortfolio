import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/models/Message';
import { MessagesService } from 'src/app/services/messages.service';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent implements OnInit {
  // bonne pratique de mettre un "s" quand c'est un tableau []
  public messages: Message[];

  public count: number;

  constructor(private svc: MessagesService) {
    this.count = 0;
    this.messages = this.svc.getMessages();
  }

  ngOnInit(): void {}

  public addCount(): void {
    this.svc.countService();
    this.count = this.count++;
    console.log(this.count++);
  }

  public chercher(val: any):void{
   this.messages = this.svc.searchArr(val.recherche)
  }
}

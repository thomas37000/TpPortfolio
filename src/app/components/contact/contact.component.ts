import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public contact!: string;
  public email!: string;

  constructor(private svc: MessagesService) {}

  ngOnInit(): void {
    this.contact = 'Messagerie';
    this.email = 'thomas.chalanson@gmail.com';
  }

  public addCount(): void {
    this.svc.countService();
  }
}


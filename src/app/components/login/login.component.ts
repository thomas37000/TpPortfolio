import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MonForm } from 'src/app/models/MonForm';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private svc: LoginService, private router: Router) {
  }

  public mdp(valeurs: MonForm) {
    this.svc.motDePasse = valeurs.password;
    this.router.navigate(['home'])
  }

}

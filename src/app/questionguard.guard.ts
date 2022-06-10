import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { MdpFormateur } from './models/MdpFormateur';

import { LoginService } from './services/login.service';

@Injectable({
  providedIn: 'root',
})
export class QuestionguardGuard implements CanActivate {
  constructor(private svc: LoginService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
      
    let dateDuJour: Date = new Date();
    let jour: number = dateDuJour.getDate();
    let mdp = this.svc.motDePasse;

    // if(jour % 2 === 0) {
    //   if(mdp.toLowerCase() === "julien"){
    //     return true
    //   }

    //   if(mdp.toLowerCase() === "matthieu"){
    //     return true
    //   }
    // }

    if (jour % 2 === 0) {
     // return mdp.toLowerCase() === 'julien';
      return mdp.toLowerCase() === MdpFormateur.JULIEN;
    } else {
      // return mdp.toLowerCase() === 'matthieu';
      return mdp.toLowerCase() === MdpFormateur.MATTHIEU;
    }
  }
}

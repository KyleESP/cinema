import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import { AuthenticationService } from '../service/authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  canActivate(): boolean {
    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser) {
      return true;
    }

    this.router.navigate(['/login']).then(null);
    return false;
  }
}

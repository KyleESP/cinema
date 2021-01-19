import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../model/user';
import { AuthenticationService } from '../../service/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email!: string;
  password!: string;

  constructor(private authenticationService: AuthenticationService, private router: Router) {
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']).then(null);
    }
  }

  submit(): void {
    const userDetails = new User(this.email, this.password);
    this.authenticationService.login(userDetails)
      .subscribe(() => { this.router.navigate(['/admin/movies']).then(null); });
  }
}

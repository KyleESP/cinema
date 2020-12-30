import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../model/User';
import { UserService } from '../../service/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username!: string;
  password!: string;
  private user!: User;
  private error!: string;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  submit(): void {
    const user = new User(this.username, this.password);

    this.userService.login(user).subscribe(
      (userFound) => {
        this.user = userFound;
      },
      (error) => {
        this.error = error.messages;
      },
      () => {
        if (this.error !== undefined) {
          console.log('Login success.');
          this.router.navigate(['admin/movie-list']).then(() => {});
        } else {
          console.log('Error : ' + this.error);
        }
      });
  }
}

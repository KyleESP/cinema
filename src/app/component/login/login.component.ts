import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../model/user';
import { UserService } from '../../service/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email!: string;
  password!: string;
  private user!: User;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  submit(): void {
    const userDetails = new User(this.email, this.password);

    this.userService.login(userDetails)
      .subscribe(
      (userFound) => {
        this.user = userFound;
      });
  }
}

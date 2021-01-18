import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../../model/user';
import {AuthenticationService} from '../../service/authentication/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  currentUser!: User | null;

  constructor(private router: Router, private authenticationService: AuthenticationService) {
    this.authenticationService.currentUser?.subscribe((user) => this.currentUser = user);
  }

  ngOnInit(): void {
  }

  logout(): void {
    this.authenticationService.logout();
  }
}

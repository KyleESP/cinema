import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import { User } from '../../model/user';
import { MessageService } from '../message/message.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUserSubject!: BehaviorSubject<User | null>;
  currentUser!: Observable<User | null>;
  private usersUrl = 'http://localhost:8080/user';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient, private messageService: MessageService) {
    const currentUserStorage = localStorage.getItem('currentUser');
    this.currentUserSubject = new BehaviorSubject<User | null>(currentUserStorage ? JSON.parse(currentUserStorage) : null);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  get currentUserValue(): User | null {
    return this.currentUserSubject?.value;
  }

  login(user: User): Observable<User> {
    const url = this.usersUrl + '/login';

    return this.httpClient.post<User>(url, user, this.httpOptions)
      .pipe(
        map((u) => {
          localStorage.setItem('currentUser', JSON.stringify(u));
          this.currentUserSubject.next(u);
          return u;
        }),
        tap(() => this.messageService.add('Connexion réussie !', 'success')),
        catchError(this.messageService.handleError<User>())
      );
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}

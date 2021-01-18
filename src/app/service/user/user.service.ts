import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User} from '../../model/user';
import { MessageService } from '../message/message.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl = 'http://localhost:8080/user';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient, private messageService: MessageService) { }

  login(user: User): Observable<User> {
    const url = this.usersUrl + '/login';

    return this.httpClient.post<User>(url, user, this.httpOptions)
      .pipe(
        tap(() => this.messageService.add('Connexion réussie !', 'success')),
        catchError(this.messageService.handleError<User>())
      );
  }
}

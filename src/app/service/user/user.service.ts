import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User} from '../../model/user';
import { MessageService } from '../message/message.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = 'http://localhost:8080/user';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient, private messageService: MessageService) { }

  login(user: User): Observable<User> {
    const url = this.userUrl + '/login';

    return this.httpClient.post<User>(url, user, this.httpOptions).pipe(
      tap((userFound: User) => this.log(`Found user with id=${userFound.id}`)),
      catchError(this.handleError<User>('loginUser'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T): any {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  /** Log a UserService message with the MessageService */
  private log(message: string): void {
    this.messageService.add(`UserService: ${message}`);
  }
}

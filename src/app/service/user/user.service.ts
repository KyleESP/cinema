import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { User} from '../../model/User';
import { Observable } from 'rxjs';

const    ENDPOINT = 'http://localhost:8080/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  login(user: User): Observable<User> {
    const url = ENDPOINT + '/login';

    const httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Cache-Control': 'no-cache'
    });
    const options = {
      headers: httpHeaders
    };

    return this.httpClient.post<User>(url, JSON.stringify(user), options);
  }
}

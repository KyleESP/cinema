import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Actor} from '../../model/actor';
import {catchError} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MessageService} from '../message/message.service';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  private actorsUrl = 'http://localhost:8080/actor';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient, private messageService: MessageService) { }

  getActors(): Observable<Actor[]> {
    const url = this.actorsUrl;

    return this.httpClient.get<Actor[]>(url)
      .pipe(
        catchError(this.messageService.handleError<Actor[]>())
      );
  }

  searchActors(term: string): Observable<Actor[]> {
    if (!term.trim()) {
      return of([]);
    }

    const url = `${this.actorsUrl}/by-term?term=${term}`;
    console.log(url);
    return this.httpClient.get<Actor[]>(url)
      .pipe(
        catchError(this.messageService.handleError<Actor[]>())
      );
  }
}

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

  getActor(id: string | null): Observable<Actor> {
    const url = `${this.actorsUrl}/${id}`;

    return this.httpClient.get<Actor>(url).pipe(
      catchError(this.messageService.handleError<Actor>())
    );
  }

  getActors(): Observable<Actor[]> {
    return this.httpClient.get<Actor[]>(this.actorsUrl)
      .pipe(
        catchError(this.messageService.handleError<Actor[]>())
      );
  }

  searchActors(term: string): Observable<Actor[]> {
    if (!term.trim()) {
      return of([]);
    }

    term = encodeURI(term);
    const url = `${this.actorsUrl}/by-term?term=${term}`;

    return this.httpClient.get<Actor[]>(url)
      .pipe(
        catchError(this.messageService.handleError<Actor[]>())
      );
  }
}

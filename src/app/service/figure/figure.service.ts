import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MessageService} from '../message/message.service';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Figure} from '../../model/figure';

@Injectable({
  providedIn: 'root'
})
export class FigureService {

  private figuresUrl = 'http://localhost:8080/figure';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient, private messageService: MessageService) { }

  getFigure(actorId: string | null, movieId: string | null): Observable<Figure> {
    const url = `${this.figuresUrl}/${actorId}/${movieId}`;

    return this.httpClient.get<Figure>(url).pipe(
      catchError(this.messageService.handleError<Figure>())
    );
  }

  getFigures(): Observable<Figure[]> {
    return this.httpClient.get<Figure[]>(this.figuresUrl)
      .pipe(
        catchError(this.messageService.handleError<Figure[]>())
      );
  }

  addFigure(figure: object): Observable<any> {
    return this.httpClient.post<Figure[]>(this.figuresUrl, figure)
      .pipe(
        catchError(this.messageService.handleError<Figure[]>())
      );
  }

  updateFigure(actorId: string | undefined, movieId: string | undefined, figure: { actor: { id: any }; movie: { id: any }; name: any })
    : Observable<Figure> {
    const url = `${this.figuresUrl}/${actorId}/${movieId}`;
    return this.httpClient.put<Figure[]>(url, figure)
      .pipe(
        catchError(this.messageService.handleError<Figure[]>())
      );
  }

  deleteFigure(figure: Figure): Observable<Figure> {
    const actorId = figure.actor !== undefined  ? figure.actor.id : '';
    const movieId = figure.movie !== undefined  ? figure.movie.id : '';
    const url = `${this.figuresUrl}/${actorId}/${movieId}`;

    return this.httpClient.delete<Figure>(url, this.httpOptions)
      .pipe(
        catchError(this.messageService.handleError<Figure>())
      );
  }
}

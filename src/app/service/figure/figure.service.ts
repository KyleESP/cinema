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

  getFigure(id: string | null): Observable<Figure> {
    const url = `${this.figuresUrl}/${id}`;

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

  deleteFigure(figure: Figure | number): Observable<Figure> {
    const id = typeof figure === 'number' ? figure : figure.id;
    const url = `${this.figuresUrl}/${id}`;

    return this.httpClient.delete<Figure>(url, this.httpOptions)
      .pipe(
        catchError(this.messageService.handleError<Figure>())
      );
  }
}

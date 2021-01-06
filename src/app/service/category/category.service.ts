import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from '../message/message.service';
import {Observable, of} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Category } from '../../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categoryUrl = 'http://localhost:8080/category';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient, private messageService: MessageService) { }

  getCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.categoryUrl)
      .pipe(
        catchError(this.handleError<Category[]>())
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(result?: T): any {
    return (error: any): Observable<T> => {
      console.error(error);

      const httpError = error.error;
      this.messageService.add(httpError.message, 'danger');

      return of(result as T);
    };
  }
}

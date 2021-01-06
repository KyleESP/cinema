import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from '../message/message.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Movie } from '../../model/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private movieUrl = 'http://localhost:8080/movie';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient, private messageService: MessageService) { }

  getMovies(): Observable<Movie[]> {
    const url = this.movieUrl;

    return this.httpClient.get<Movie[]>(url)
      .pipe(
        catchError(this.handleError<Movie[]>())
      );
  }

  getMoviesByCategoryId(categoryId: string | null): Observable<Movie[]> {
    const url = this.movieUrl + (categoryId !== null ? `/by-category?categoryId=${categoryId}` : '');

    return this.httpClient.get<Movie[]>(url)
      .pipe(
        catchError(this.handleError<Movie[]>())
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

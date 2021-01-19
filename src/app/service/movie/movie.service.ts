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

  private moviesUrl = 'http://localhost:8080/movie';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient, private messageService: MessageService) { }

  getMovies(): Observable<Movie[]> {
    const url = this.moviesUrl;

    return this.httpClient.get<Movie[]>(url)
      .pipe(
        catchError(this.messageService.handleError<Movie[]>())
      );
  }

  getMoviesByCategoryId(categoryId: string | null): Observable<Movie[]> {
    const url = `${this.moviesUrl}/by-category?categoryId=${categoryId}`;

    return this.httpClient.get<Movie[]>(url)
      .pipe(
        catchError(this.messageService.handleError<Movie[]>())
      );
  }

  searchMovies(term: string): Observable<Movie[]> {
    if (!term.trim()) {
      return of([]);
    }

    const url = `${this.moviesUrl}/by-term?term=${term}`;

    return this.httpClient.get<Movie[]>(url)
      .pipe(
        catchError(this.messageService.handleError<Movie[]>())
      );
  }

  deleteMovie(movie: Movie | number): Observable<Movie> {
    const id = typeof movie === 'number' ? movie : movie.id;
    const url = `${this.moviesUrl}/${id}`;

    return this.httpClient.delete<Movie>(url, this.httpOptions)
      .pipe(
        catchError(this.messageService.handleError<Movie>())
    );
  }

}

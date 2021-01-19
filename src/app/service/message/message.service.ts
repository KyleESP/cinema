import { Injectable } from '@angular/core';
import * as M from 'materialize-css';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  colorsMap: Map<string, string>;

  constructor() {
    this.colorsMap = new Map([
      ['success', 'green'],
      ['error', 'red lighten-1']
    ]);
  }

  add(message: string, type: string): void {
    M.toast({html: message, classes: `${this.colorsMap.get(type)} rounded`});
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param result - optional value to return as the observable result
   */
  handleError<T>(result?: T): any {
    return (error: any): Observable<T> => {
      error = error.error;
      console.error(error);

      const errors = error.errors;

      errors.forEach((e: any) => {
        this.add(e.message, 'error');
      });

      return of(result as T);
    };
  }
}

import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages = Array<{message: string, type: string}>();

  add(message: string, type: string): void {
    this.messages.push({message, type});
  }

  clear(index: number): void {
    this.messages.splice(index, 1);
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
        this.add(e.message, 'danger');
      });

      return of(result as T);
    };
  }
}

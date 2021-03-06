import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from '../message/message.service';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Category } from '../../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categoriesUrl = 'http://localhost:8080/category';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient, private messageService: MessageService) { }

  getCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.categoriesUrl)
      .pipe(
        catchError(this.messageService.handleError<Category[]>())
      );
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { MoviesComponent } from './component/movies/movies.component';
import { LoginComponent } from './component/login/login.component';
import { MessagesComponent } from './component/messages/messages.component';
import { CategoriesComponent } from './component/categories/categories.component';
import { CategoryMoviesComponent } from './component/category-movies/category-movies.component';
import { MovieSearchComponent } from './component/movie-search/movie-search.component';
import { MovieItemComponent } from './component/movie-item/movie-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MoviesComponent,
    LoginComponent,
    MessagesComponent,
    CategoriesComponent,
    CategoryMoviesComponent,
    MovieSearchComponent,
    MovieItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

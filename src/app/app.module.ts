import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { MoviesComponent } from './component/movies/movies.component';
import { LoginComponent } from './component/login/login.component';
import { CategoriesComponent } from './component/categories/categories.component';
import { CategoryMoviesComponent } from './component/category-movies/category-movies.component';
import { MovieSearchComponent } from './component/movie-search/movie-search.component';
import { MovieItemComponent } from './component/movie-item/movie-item.component';
import { MoviesAdminComponent } from './component/movies-admin/movies-admin.component';
import { ActorsComponent } from './component/actors/actors.component';
import { ActorItemComponent } from './component/actor-item/actor-item.component';
import { ActorSearchComponent } from './component/actor-search/actor-search.component';
import { MovieDetailComponent } from './component/movie-detail/movie-detail.component';
import { HoursMinutesPipe } from './pipe/hours-minutes/hours-minutes.pipe';
import { ThousandSuffixPipe } from './pipe/thousand-suffix/thousand-suffix.pipe';
import { ActorDetailComponent } from './component/actor-detail/actor-detail.component';
import { FiguresAdminComponent } from './component/figures-admin/figures-admin.component';
import { FigureItemComponent } from './component/figure-item/figure-item.component';
import { FigureAddItemComponent } from './component/figure-add-item/figure-add-item.component';
import { FigureUpdateItemComponent } from './component/figure-update-item/figure-update-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MoviesComponent,
    LoginComponent,
    CategoriesComponent,
    CategoryMoviesComponent,
    MovieSearchComponent,
    MovieItemComponent,
    MoviesAdminComponent,
    ActorsComponent,
    ActorItemComponent,
    ActorSearchComponent,
    MovieDetailComponent,
    HoursMinutesPipe,
    ThousandSuffixPipe,
    ActorDetailComponent,
    FiguresAdminComponent,
    FigureItemComponent,
    FigureAddItemComponent,
    FigureUpdateItemComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

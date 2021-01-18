import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { CategoryMoviesComponent } from './component/category-movies/category-movies.component';
import { CategoriesComponent } from './component/categories/categories.component';
import { MovieSearchComponent } from './component/movie-search/movie-search.component';
import {AuthGuard} from './guard/auth.guard';
import {MoviesAdminComponent} from './component/movies-admin/movies-admin.component';

const routes: Routes = [
  { path: '', redirectTo : '/categories', pathMatch: 'full' },
  { path: 'categories', component: CategoriesComponent },
  { path: 'category-movies/:categoryId', component: CategoryMoviesComponent },
  { path: 'movies', component: MovieSearchComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin/movies', component: MoviesAdminComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { MoviesComponent } from './component/movies/movies.component';
import { CategoryMoviesComponent } from './component/category-movies/category-movies.component';
import { CategoriesComponent } from './component/categories/categories.component';

const routes: Routes = [
  { path: '', redirectTo : '/categories', pathMatch: 'full' },
  { path: 'categories', component: CategoriesComponent },
  { path: 'category-movies/:categoryId', component: CategoryMoviesComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

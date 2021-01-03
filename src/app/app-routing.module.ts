import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { MovieListComponent } from './component/movie-list/movie-list.component';
import { CategoriesComponent } from './component/categories/categories.component';

const routes: Routes = [
  { path: '', redirectTo : '/category-list', pathMatch: 'full' },
  { path: 'categories', component: CategoriesComponent },
  { path: 'movie-list', component: MovieListComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

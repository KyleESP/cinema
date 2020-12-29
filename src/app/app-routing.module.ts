import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { CategoryListComponent } from './category-list/category-list.component';

const routes: Routes = [
  { path: '', redirectTo : '/category-list', pathMatch: 'full' },
  { path: 'category-list', component: CategoryListComponent },
  { path: 'movie-list', component: MovieListComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

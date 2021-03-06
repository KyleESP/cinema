import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { CategoryMoviesComponent } from './component/category-movies/category-movies.component';
import { CategoriesComponent } from './component/categories/categories.component';
import { MovieSearchComponent } from './component/movie-search/movie-search.component';
import {AuthGuard} from './guard/auth.guard';
import {MoviesAdminComponent} from './component/movies-admin/movies-admin.component';
import {ActorSearchComponent} from './component/actor-search/actor-search.component';
import {MovieDetailComponent} from './component/movie-detail/movie-detail.component';
import {ActorDetailComponent} from './component/actor-detail/actor-detail.component';
import {FiguresAdminComponent} from './component/figures-admin/figures-admin.component';
import {FigureAddItemComponent} from './component/figure-add-item/figure-add-item.component';
import {FigureUpdateItemComponent} from './component/figure-update-item/figure-update-item.component';

const routes: Routes = [
  { path: '', redirectTo : '/categories', pathMatch: 'full' },
  { path: 'categories', component: CategoriesComponent },
  { path: 'category-movies/:categoryId', component: CategoryMoviesComponent },
  { path: 'movies', component: MovieSearchComponent },
  { path: 'actors', component: ActorSearchComponent },
  { path: 'movie-detail/:movieId', component: MovieDetailComponent },
  { path: 'actor-detail/:actorId', component: ActorDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin/movies', component: MoviesAdminComponent, canActivate: [AuthGuard] },
  { path: 'admin/figures', component: FiguresAdminComponent, canActivate: [AuthGuard] },
  { path: 'admin/figures/add', component: FigureAddItemComponent, canActivate: [AuthGuard] },
  { path: 'admin/figures/update/:idActor/:idMovie', component: FigureUpdateItemComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

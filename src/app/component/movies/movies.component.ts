import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../model/movie';
import { MovieService } from '../../service/service/movie.service';
import {Observable} from "rxjs";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  @Input() movies?: Movie[];
  @Input() movies$?: Observable<Movie[]>;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    if (this.movies === undefined && this.movies$ === undefined) {
      this.getMovies();
    }
  }

  getMovies(): void {
      this.movieService.getMovies()
        .subscribe(movies => this.movies = movies);
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../model/movie';
import { MovieService } from '../../service/service/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  @Input() movies?: Movie[];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    if (this.movies === undefined) {
      this.getMovies();
    }
  }

  getMovies(): void {
      this.movieService.getMovies()
        .subscribe(movies => this.movies = movies);
  }
}

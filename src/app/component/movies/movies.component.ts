import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../model/movie';
import { MovieService } from '../../service/movie/movie.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  @Input() movies?: Movie[];
  @Input() movies$?: Observable<Movie[]>;
  @Input() isManageable = false;

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

  clear(index: number): void {
    this.movies?.splice(index, 1);
  }
}

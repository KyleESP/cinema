import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Movie } from '../../model/movie';
import {MovieService} from '../../service/movie/movie.service';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent {

  @Input() movie!: Movie;
  @Input() isManageable = false;
  @Output() delete: EventEmitter<any> = new EventEmitter();

  constructor(private movieService: MovieService) { }

  deleteMovie(): void {
    this.movieService.deleteMovie(this.movie)
      .subscribe(() => {
        this.delete.emit();
      });
  }
}

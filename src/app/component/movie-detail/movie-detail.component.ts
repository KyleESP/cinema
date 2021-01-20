import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MovieService} from '../../service/movie/movie.service';
import {Movie} from '../../model/movie';
import {User} from '../../model/user';
import {AuthenticationService} from '../../service/authentication/authentication.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  movie!: Movie;
  currentUser!: User | null;

  constructor(private route: ActivatedRoute, private movieService: MovieService, private authenticationService: AuthenticationService) {
    this.authenticationService.currentUser?.subscribe((user) => this.currentUser = user);
  }

  ngOnInit(): void {
    this.getMovie();
  }

  getMovie(): void {
    const movieId: string | null = this.route.snapshot.paramMap.get('movieId');
    this.movieService.getMovie(movieId)
      .subscribe(movie => this.movie = movie);
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../service/service/movie.service';
import { Movie } from '../../model/movie';

@Component({
  selector: 'app-category-movies',
  templateUrl: './category-movies.component.html',
  styleUrls: ['./category-movies.component.scss']
})
export class CategoryMoviesComponent implements OnInit {

  movies!: Movie[];

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    const categoryId: string | null = this.route.snapshot.paramMap.get('categoryId');
    this.movieService.getMoviesByCategoryId(categoryId)
      .subscribe(movies => this.movies = movies);
  }

}

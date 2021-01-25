import {Component, Input, OnInit} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {Movie} from '../../model/movie';
import {Observable} from 'rxjs';
import {MovieService} from '../../service/movie/movie.service';
import {Actor} from '../../model/actor';
import {ActorService} from '../../service/actor/actor.service';
import {FigureService} from '../../service/figure/figure.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-figure-add-item',
  templateUrl: './figure-add-item.component.html',
  styleUrls: ['./figure-add-item.component.scss']
})
export class FigureAddItemComponent implements OnInit {

  @Input() movies?: Movie[];
  @Input() actors?: Actor[];

  figureForm = new FormGroup({
    movieId: new FormControl(''),
    actorId: new FormControl(''),
    name: new FormControl(''),
  });

  constructor(
    private movieService: MovieService,
    private actorService: ActorService,
    private figureService: FigureService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (this.movies === undefined) {
      this.getMovies();
    }
    if (this.actors === undefined) {
      this.getActors();
    }
    setTimeout(() => {
      const elems = document.querySelectorAll('select');
      M.FormSelect.init(elems);
    }, 500); // ugly but to wait API responses
  }

  getMovies(): void {
    this.movieService.getMovies()
      .subscribe(movies => this.movies = movies );
  }

  getActors(): void {
    this.actorService.getActors()
      .subscribe(actors => this.actors = actors );
  }

  onSubmit(): void {
    this.figureService.addFigure({
      name: this.figureForm.value.name,
      movie: {
        id: this.figureForm.value.movieId
      },
      actor: {
        id: this.figureForm.value.actorId
      }
    }).subscribe(
      () => this.router.navigate(['/admin/figures'])
    );
  }
}

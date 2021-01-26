import {Component, Input, OnInit} from '@angular/core';
import {Movie} from '../../model/movie';
import {Actor} from '../../model/actor';
import {FormControl, FormGroup} from '@angular/forms';
import {MovieService} from '../../service/movie/movie.service';
import {ActorService} from '../../service/actor/actor.service';
import {FigureService} from '../../service/figure/figure.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Figure} from '../../model/figure';

@Component({
  selector: 'app-figure-update-item',
  templateUrl: './figure-update-item.component.html',
  styleUrls: ['./figure-update-item.component.scss']
})
export class FigureUpdateItemComponent implements OnInit {

  @Input() movies?: Movie[];
  @Input() actors?: Actor[];
  @Input() figure?: Figure;

  figureForm = new FormGroup({
    movieId: new FormControl(''),
    actorId: new FormControl(''),
    name: new FormControl(''),
  });

  constructor(
    private movieService: MovieService,
    private actorService: ActorService,
    private figureService: FigureService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    if (this.figure === undefined) {
      this.getFigure();
    }
    if (this.movies === undefined) {
      this.getMovies();
    }
    if (this.actors === undefined) {
      this.getActors();
    }

    setTimeout(() => {
      const movie = document.getElementById('movie');
      // @ts-ignore
      for (const elem of movie.children) {
        // tslint:disable-next-line:triple-equals
        if (elem.value == this.figure?.movie.id) {
          elem.selected = true;
        }
      }
      this.figureForm.patchValue({movieId: this.figure?.movie.id});
      const actor = document.getElementById('actor');
      // @ts-ignore
      for (const elem of actor.children) {
        // tslint:disable-next-line:triple-equals
        if (elem.value == this.figure?.actor.id) {
          elem.selected = true;
        }
      }
      this.figureForm.patchValue({actorId: this.figure?.actor.id});

      const elems = document.querySelectorAll('select');
      M.FormSelect.init(elems);

      // @ts-ignore
      document.getElementById('name').value = this.figure?.name;
      this.figureForm.patchValue({name: this.figure?.name});
      M.updateTextFields();
    }, 500); // ugly but to wait API responses
  }

  getMovies(): void {
    this.movieService.getMovies()
      .subscribe(movies => this.movies = movies );
  }

  getActors(): void {
    this.actorService.getActors()
      .subscribe(actors => this.actors = actors);
  }

  getFigure(): void {
    const movieId: string | null = this.route.snapshot.paramMap.get('idMovie');
    const actorId: string | null = this.route.snapshot.paramMap.get('idActor');
    this.figureService.getFigure(actorId, movieId)
      .subscribe(figure => this.figure = figure);
  }

  onSubmit(): void {
    this.figureService.updateFigure(this.figure?.actor.id, this.figure?.movie.id, {
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

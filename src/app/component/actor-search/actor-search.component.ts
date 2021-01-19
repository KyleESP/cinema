import { Component, OnInit } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Actor} from '../../model/actor';
import {ActorService} from '../../service/actor/actor.service';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-actor-search',
  templateUrl: './actor-search.component.html',
  styleUrls: ['./actor-search.component.scss']
})
export class ActorSearchComponent implements OnInit {

  actors$!: Observable<Actor[]>;
  private searchTerms = new Subject<string>();

  constructor(private actorService: ActorService) {}

  ngOnInit(): void {
    this.actors$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.actorService.searchActors(term)),
    );
  }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

}

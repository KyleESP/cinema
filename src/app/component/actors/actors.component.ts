import {Component, Input, OnInit} from '@angular/core';
import {Actor} from '../../model/actor';
import {Observable} from 'rxjs';
import {ActorService} from '../../service/actor/actor.service';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.scss']
})
export class ActorsComponent implements OnInit {

  @Input() actors?: Actor[];
  @Input() actors$?: Observable<Actor[]>;
  @Input() isManageable = false;

  constructor(private actorService: ActorService) { }

  ngOnInit(): void {
    if (this.actors === undefined && this.actors$ === undefined) {
      this.getActors();
    }
  }

  getActors(): void {
    this.actorService.getActors()
      .subscribe(actors => this.actors = actors);
  }

}

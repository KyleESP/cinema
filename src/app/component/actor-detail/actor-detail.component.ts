import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Actor} from '../../model/actor';
import {ActorService} from '../../service/actor/actor.service';
import {User} from '../../model/user';
import {AuthenticationService} from '../../service/authentication/authentication.service';

@Component({
  selector: 'app-actor-detail',
  templateUrl: './actor-detail.component.html',
  styleUrls: ['./actor-detail.component.scss']
})
export class ActorDetailComponent implements OnInit {

  actor!: Actor;
  currentUser!: User | null;

  constructor(private route: ActivatedRoute, private actorService: ActorService, private authenticationService: AuthenticationService) {
    this.authenticationService.currentUser?.subscribe((user) => this.currentUser = user);
  }

  ngOnInit(): void {
    this.getActor();
  }

  getActor(): void {
    const actorId: string | null = this.route.snapshot.paramMap.get('actorId');
    this.actorService.getActor(actorId)
      .subscribe(actor => this.actor = actor);
  }
}

import {Component, Input} from '@angular/core';
import {Actor} from '../../model/actor';

@Component({
  selector: 'app-actor-item',
  templateUrl: './actor-item.component.html',
  styleUrls: ['./actor-item.component.scss']
})
export class ActorItemComponent {

  @Input() actor!: Actor;

  constructor() { }
}

import {Actor} from './actor';
import {Movie} from './movie';

export class Figure {
  constructor(
    public name: string,
    public actor?: Actor,
    public movie?: Movie,
    public id?: string
  ) {}
}

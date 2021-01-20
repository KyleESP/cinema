import {Figure} from './figure';

export class Actor {
  constructor(
    public lastName: string,
    public firstName: string,
    public birthdayDate: Date,
    public figures: Array<Figure>,
    public deathdayDate?: Date,
    public id?: string
  ) {}
}

import {Figure} from './figure';
import {Category} from './category';
import {Director} from './director';

export class Movie {
  constructor(
    public title: string,
    public duration: number,
    public releaseDate: Date,
    public budget: number,
    public revenueAmount: number,
    public category: Category,
    public director: Director,
    public figures: Array<Figure>,
    public id?: string
  ) {}
}

export class Movie {
  constructor(
    public title: string,
    public duration: number,
    public releaseDate: Date,
    public budget: number,
    public revenueAmount: number,
    public id?: string
  ) {}
}

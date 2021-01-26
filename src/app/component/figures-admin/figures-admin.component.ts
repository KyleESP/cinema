import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {FigureService} from '../../service/figure/figure.service';
import {Figure} from '../../model/figure';

@Component({
  selector: 'app-figures-admin',
  templateUrl: './figures-admin.component.html',
  styleUrls: ['./figures-admin.component.scss']
})
export class FiguresAdminComponent implements OnInit {

  @Input() figures?: Figure[];
  @Input() figures$?: Observable<Figure[]>;

  constructor(private figureService: FigureService) { }

  ngOnInit(): void {
    if (this.figures === undefined && this.figures$ === undefined) {
      this.getFigures();
    }
  }

  getFigures(): void {
    this.figureService.getFigures()
      .subscribe(figures => this.figures = figures);
  }

  clear(index: number): void {
    this.figures?.splice(index, 1);
  }

}

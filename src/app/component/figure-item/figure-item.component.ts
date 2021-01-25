import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FigureService} from '../../service/figure/figure.service';
import {Figure} from '../../model/figure';

@Component({
  selector: 'app-figure-item',
  templateUrl: './figure-item.component.html',
  styleUrls: ['./figure-item.component.scss']
})
export class FigureItemComponent {

  @Input() figure!: Figure;
  @Output() delete: EventEmitter<any> = new EventEmitter();

  constructor(private figureService: FigureService) { }

  deleteFigure(): void {
    this.figureService.deleteFigure(this.figure)
      .subscribe(() => {
        this.delete.emit();
      });
  }

}

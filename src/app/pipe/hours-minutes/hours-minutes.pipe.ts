import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hoursMinutes'
})
export class HoursMinutesPipe implements PipeTransform {

  transform(value: number): string {
    value *= 60;
    const h = Math.floor(value / 3600);
    const m = Math.floor(value % 3600 / 60);

    const hDisplay = h + 'h';
    const mDisplay = (m < 10 ? '0' : '') + m + 'm';

    return hDisplay + mDisplay;
  }

}

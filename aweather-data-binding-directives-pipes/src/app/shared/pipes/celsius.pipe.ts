import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'celsius'
})
export class CelsiusPipe implements PipeTransform {

  transform(value: any, symbol: boolean = true): any {
    if (value === undefined || value === null || value === '') {
      value = 32;
    }

    const celsiusValue = (value - 32) * 5.0 / 9.0;
    return `${Math.round(celsiusValue).toString()} ${symbol ? 'ºC' : ''}`;
  }

}

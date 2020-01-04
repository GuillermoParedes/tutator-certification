import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sum'
})
export class SumPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (value) {
      return value.slice('').reduce((acc, current) => {
        return acc + current;
      }, 0);
    } else {
      return 'S/R wo/';
    }
  }

}

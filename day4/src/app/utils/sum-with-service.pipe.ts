import { Pipe, PipeTransform } from '@angular/core';
import { CharactersService } from '../services/characters.service';

@Pipe({
  name: 'sumWithService'
})
export class SumWithServicePipe implements PipeTransform {

  constructor(private service: CharactersService) {

  }

  transform(value: any, ...args: any[]): any {

    if (value) {
      return this.service.getSumarray(value);
    } else {
      return 'S/R w/'
    }

  }

}

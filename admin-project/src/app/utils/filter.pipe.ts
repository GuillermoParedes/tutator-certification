import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string, searchKey: string): any[] {

    console.log('searchKey', searchKey);
    if (!items) { return []; }
    if (!searchText) { return items; }

    searchText = searchText.toLowerCase();
    return items.filter(it => {
      return it[searchKey].toLowerCase().includes(searchText);
    });
  }
}

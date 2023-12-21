import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
  standalone: true,
})
export class SearchFilterPipe implements PipeTransform {
  transform(items: any | null, searchText: string): any | null {
    if (!items || !searchText) {
      return items;
    }

    searchText = searchText.toLowerCase();

    return items.filter((item: any) => {
      return JSON.stringify(item).toLowerCase().includes(searchText);
    });
  }
}

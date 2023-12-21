import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
  standalone: true,
})
export class SearchFilterPipe implements PipeTransform {
  transform<T>(items: T[] | null, searchText: string): T[] | null {
    if (!items || !searchText) {
      return items;
    }

    searchText = searchText.toLowerCase();

    return items.filter((item: T) => {
      return JSON.stringify(item).toLowerCase().includes(searchText);
    });
  }
}

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'smart-energy-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search.component.html',
})
export class SearchComponent {
  @Input() hasButtons = false;
  @Input() searchText = '';
  @Output() searchTextChange = new EventEmitter<string>();

  private debounceTimer!: ReturnType<typeof setTimeout>;

  onInputChange() {
    clearTimeout(this.debounceTimer);
    this.debounceTimer = setTimeout(() => {
      this.searchTextChange.emit(this.searchText);
    }, 300);
  }

  clearSearch() {
    clearTimeout(this.debounceTimer);
    this.searchText = '';
    this.searchTextChange.emit(this.searchText);
  }
}

import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService, ILocation, LocationService, SearchComponent } from '@smart-energy/core';
import { CalculationHistoryService } from '../../services/calculation-history.service';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@Component({
  selector: 'smart-energy-search-location-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, SearchComponent, InfiniteScrollModule],
  providers: [LocationService, CalculationHistoryService],
  templateUrl: './search-location-modal.component.html'
})
export class SearchLocationModalComponent {
  @Output() locationSelect = new EventEmitter();
  isModalOpen = false;

  locations: ILocation[] = [];
  searchQuery = '';
  page = 1;

  constructor(
    private locationService: LocationService,
    private authService: AuthService
  ) {}

  openModal() {
    this.loadLocations(true);
    this.isModalOpen = true;
  }

  loadLocations(reset = false) {
    if (reset) {
      this.page = 1;
    }

    this.locationService
      .list({
        query: this.searchQuery,
        page: this.page++,
      })
      .subscribe(
        (locations) => (this.locations = reset ? locations : [...this.locations, ...locations]),
      );
  }

  select(location: ILocation) {
    this.locationSelect.emit(location);
    this.isModalOpen = false;
  }
}

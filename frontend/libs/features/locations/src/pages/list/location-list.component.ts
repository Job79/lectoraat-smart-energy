import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ILocation, LocationService } from '@smart-energy/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SearchComponent } from '../../components/search/search.component';

@Component({
  selector: 'smart-energy-list',
  standalone: true,
  imports: [CommonModule, RouterLink, InfiniteScrollModule, SearchComponent],
  providers: [LocationService],
  templateUrl: './location-list.component.html',
})
export class LocationListComponent implements OnInit {
  appComponentDiv = document.querySelector('.app-component');
  locations: ILocation[] = [];
  searchQuery = '';
  page = 1;

  constructor(private locationService: LocationService) {}

  ngOnInit() {
    this.loadLocations();
  }

  loadLocations(reset = false) {
    if (reset) {
      this.page = 1;
    }

    if (this.searchQuery) {
      this.locationService
        .search(this.searchQuery, this.page++)
        .subscribe(
          (locations) => (this.locations = reset ? locations : [...this.locations, ...locations]),
        );
    } else {
      this.locationService
        .list(this.page++)
        .subscribe(
          (locations) => (this.locations = reset ? locations : [...this.locations, ...locations]),
        );
    }
  }
}

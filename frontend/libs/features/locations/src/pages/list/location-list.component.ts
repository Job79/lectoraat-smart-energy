import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  CreateLocationModalComponent,
  IconLocationComponent,
  IconLocationsComponent,
  IconUrlComponent,
  IconUserComponent,
  ILocation,
  LocationService,
  HeaderComponent,
  SearchComponent,
} from '@smart-energy/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@Component({
  selector: 'smart-energy-location-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    InfiniteScrollModule,
    SearchComponent,
    HeaderComponent,
    CreateLocationModalComponent,
    IconLocationsComponent,
    IconUserComponent,
    IconUrlComponent,
    IconLocationComponent,
  ],
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

    this.locationService
      .list({
        query: this.searchQuery,
        page: this.page++,
      })
      .subscribe(
        (locations) => (this.locations = reset ? locations : [...this.locations, ...locations]),
      );
  }
}

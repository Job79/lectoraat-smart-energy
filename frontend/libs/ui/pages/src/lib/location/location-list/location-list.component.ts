import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationService } from '../location.service';
import { RouterLink } from '@angular/router';
import { Location } from '@lectoraat-smart-energy/shared';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from '@lectoraat-smart-energy/ui/components';

@Component({
  selector: 'lectoraat-smart-energy-location-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    InfiniteScrollModule,
    FormsModule,
    SearchComponent,
  ],
  providers: [LocationService],
  templateUrl: './location-list.component.html',
  styleUrl: './location-list.component.css',
})
export class LocationListComponent implements OnInit {
  locations: Location[] = [];
  page = 1;
  searchText = '';
  private debounceTimer: any;

  constructor(private locationService: LocationService) {}

  ngOnInit() {
    this.getLocations();
  }

  onScroll() {
    this.page++;
    this.getLocations();
  }

  getLocations() {
    this.locationService
      .getLocationsList(this.page, this.searchText)
      .subscribe((locations: Location[]) => {
        this.locations.push(...locations);
      });
  }

  onSearchTextChange(newSearchText: string) {
    this.search();
    console.log('Search text changed:', newSearchText);
  }

  search() {
    this.locations = [];
    this.page = 1;
    this.getLocations();
  }

  clearSearch() {
    this.searchText = '';
    this.search();
  }
}

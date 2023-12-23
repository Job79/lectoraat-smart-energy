import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationService } from '../location.service';
import { RouterLink } from '@angular/router';
import { Location } from '@lectoraat-smart-energy/shared';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import {
  LoadingComponent,
  SearchComponent,
} from '@lectoraat-smart-energy/ui/components';
import { delay } from 'rxjs';

@Component({
  selector: 'lectoraat-smart-energy-location-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    InfiniteScrollModule,
    SearchComponent,
    LoadingComponent,
  ],
  providers: [LocationService],
  templateUrl: './location-list.component.html',
  styleUrl: './location-list.component.css',
})
export class LocationListComponent implements OnInit {
  locations: Location[] = [];
  searchText = '';
  page = 1;

  constructor(private locationService: LocationService) {}

  ngOnInit() {
    this.getLocations();
  }

  onScroll() {
    this.page++;
    this.getLocations();
  }

  onSearch() {
    this.search();
  }

  clearSearch() {
    this.searchText = '';
    this.search();
  }

  search() {
    this.locations = [];
    this.page = 1;
    this.getLocations();
  }

  getLocations() {
    this.locationService
      .getLocationsList(this.page, this.searchText)
      .pipe(delay(300))
      .subscribe((locations: Location[]) => {
        this.locations.push(...locations);
      });
  }
}

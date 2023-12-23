import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationService } from '../location.service';
import { RouterLink } from '@angular/router';
import { Location } from '@lectoraat-smart-energy/shared';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'lectoraat-smart-energy-location-list',
  standalone: true,
  imports: [CommonModule, RouterLink, InfiniteScrollModule, FormsModule],
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

  onInputChange() {
    clearTimeout(this.debounceTimer);
    this.debounceTimer = setTimeout(() => {
      this.search();
    }, 300);
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

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationService } from '../location.service';
import { RouterLink } from '@angular/router';
import { Location } from '@lectoraat-smart-energy/shared';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@Component({
  selector: 'lectoraat-smart-energy-location-list',
  standalone: true,
  imports: [CommonModule, RouterLink, InfiniteScrollModule],
  providers: [LocationService],
  templateUrl: './location-list.component.html',
  styleUrl: './location-list.component.css',
})
export class LocationListComponent implements OnInit {
  locations: Location[] = [];
  page = 0;

  constructor(private locationService: LocationService) {}

  ngOnInit() {
    this.getLocations();
  }

  onScroll() {
    this.getLocations();
  }

  getLocations() {
    this.locationService
      .getLocationsList(this.page++)
      .subscribe((locations: Location[]) => {
        this.locations.push(...locations);
      });
  }
}

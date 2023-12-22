import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationService } from '../location.service';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
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
  locations$: Location[] = []; // Initialize locations$ as an array
  page = 1;
  finished = false;

  constructor(private locationService: LocationService) {}

  ngOnInit() {
    this.getLocations();
  }

  onScroll() {
    console.log('scrolled!!');
    this.getLocations();
  }

  getLocations() {
    if (this.finished) {
      return;
    }

    this.locationService
      .getLocationsList(++this.page)
      .subscribe((commentaries: Location[]) => {
        this.locations$.push(...commentaries);
      });
  }
}

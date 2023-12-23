import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { ILocation, LocationService } from '@smart-energy/core';

@Component({
  selector: 'smart-energy-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  providers: [LocationService],
  templateUrl: './location-list.component.html',
})
export class LocationListComponent implements OnInit {
  locations$!: Observable<ILocation[]>;

  constructor(private locationService: LocationService) {}

  ngOnInit() {
    this.locations$ = this.locationService.list();
  }
}

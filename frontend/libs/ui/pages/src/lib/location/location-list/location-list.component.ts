import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationService } from '../location.service';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { Location } from '@lectoraat-smart-energy/shared';

@Component({
  selector: 'lectoraat-smart-energy-location-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  providers: [LocationService],
  templateUrl: './location-list.component.html',
  styleUrl: './location-list.component.css',
})
export class LocationListComponent implements OnInit {
  locations$!: Observable<Location[]>;

  constructor(private locationService: LocationService) {}

  ngOnInit() {
    this.locations$ = this.locationService.getLocations();
  }
}

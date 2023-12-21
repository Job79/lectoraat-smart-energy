import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationService } from '../location.service';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { Location, SearchFilterPipe } from '@lectoraat-smart-energy/shared';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'lectoraat-smart-energy-location-list',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, SearchFilterPipe],
  providers: [LocationService],
  templateUrl: './location-list.component.html',
  styleUrl: './location-list.component.css',
})
export class LocationListComponent implements OnInit {
  locations$!: Observable<Location[]>;
  searchText = '';

  constructor(private locationService: LocationService) {}

  ngOnInit() {
    this.locations$ = this.locationService.getLocations();
  }

  clearSearch() {
    this.searchText = '';
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationService } from '../location.service';
import { FormsModule } from '@angular/forms';
import { Location } from '@lectoraat-smart-energy/shared';

@Component({
  selector: 'lectoraat-smart-energy-location-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [LocationService],
  templateUrl: './location-edit.component.html',
  styleUrl: './location-edit.component.css',
})
export class LocationEditComponent {
  location: Location = {} as Location;

  constructor(private locationService: LocationService) {}

  create() {
    this.locationService.create(this.location);
  }
}

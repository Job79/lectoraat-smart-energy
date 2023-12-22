import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LocationService } from '../../services/location.service';
import { AuthService, ILocation } from '@smart-energy/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'smart-energy-edit',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  providers: [LocationService],
  templateUrl: './location-edit.component.html',
})
export class LocationEditComponent implements OnInit {
  location = {
    owner: this.authService.user$.value?.data.id,
  } as ILocation;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private locationService: LocationService,
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      return;
    }

    this.locationService.get(id).subscribe((location) => (this.location = location));
  }

  save() {
    if (this.location.id) {
      this.locationService.update(this.location);
    } else {
      this.locationService
        .create(this.location)
        .subscribe((location) => this.router.navigate(['/locations', location.id]));
    }
  }
}

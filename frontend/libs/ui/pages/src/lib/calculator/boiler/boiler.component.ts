import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoilerService } from '../boiler.service';
import { FormsModule } from '@angular/forms';
import { Boiler, EnergyLabels, Location } from '@lectoraat-smart-energy/shared';
import { BoilerResultComponent } from '@lectoraat-smart-energy/ui/components';
import { Observable } from 'rxjs';
import { LocationService } from '../../location/location.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AuthService } from '@lectoraat-smart-energy/ui/auth';

@Component({
  selector: 'lectoraat-smart-energy-boiler',
  standalone: true,
  imports: [CommonModule, FormsModule, BoilerResultComponent, RouterModule],
  providers: [BoilerService, LocationService],
  templateUrl: './boiler.component.html',
})
export class BoilerComponent implements OnInit {
  isLoggedIn = false;
  boiler = {} as Boiler;
  locations$!: Observable<Location[]>;

  energyLabels = Object.keys(EnergyLabels);

  constructor(
    private boilerService: BoilerService,
    private locationService: LocationService,
    private authService: AuthService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') ?? '';

    if (id) {
      this.boilerService.getBoiler(id).subscribe((boiler) => {
        this.boiler = boiler;
      });
    }
    this.locations$ = this.locationService.getLocations();

    this.authService.user$.subscribe((user) => {
      this.isLoggedIn = user.isLoggedIn;
    });
  }

  createCalculation() {
    this.boilerService.createCalculation(this.boiler);
  }

  updateCalculation() {
    this.boilerService.updateCalculation(this.boiler);
  }
}

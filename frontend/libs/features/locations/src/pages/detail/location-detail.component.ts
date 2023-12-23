import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CalculationService, ICalculation, ILocation, LocationService } from '@smart-energy/core';

@Component({
  selector: 'smart-energy-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  providers: [LocationService, CalculationService],
  templateUrl: './location-detail.component.html',
})
export class LocationDetailComponent implements OnInit {
  location$!: Observable<ILocation>;
  calculations$!: Observable<ICalculation<unknown>[]>;

  constructor(
    private route: ActivatedRoute,
    private locationService: LocationService,
    private boilerService: CalculationService<unknown>,
  ) {}

  ngOnInit(): void {
    const locationId = this.route.snapshot.paramMap.get('id') ?? '';
    this.location$ = this.locationService.get(locationId);
    this.calculations$ = this.boilerService.list(locationId);
  }
}

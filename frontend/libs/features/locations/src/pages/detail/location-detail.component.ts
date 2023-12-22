import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ICalculation, ILocation } from '@smart-energy/core';
import { LocationService } from '../../services/location.service';
import { CalculationService } from '../../services/calculation.service';

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

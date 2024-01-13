import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import {
  CalculationDescriptions,
  CalculationService,
  ICalculation,
  IconCalculatorsComponent,
  IconLocationComponent,
  IconLocationsComponent,
  ILocation,
  LocationService,
  HeaderComponent,
  SearchComponent,
  IconUrlComponent,
} from '@smart-energy/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'smart-energy-location-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeaderComponent,
    SearchComponent,
    FormsModule,
    IconLocationsComponent,
    IconLocationComponent,
    IconCalculatorsComponent,
    IconUrlComponent,
  ],
  providers: [LocationService, CalculationService],
  templateUrl: './location-detail.component.html',
})
export class LocationDetailComponent implements OnInit {
  calculationDescriptions = CalculationDescriptions;
  location!: ILocation;
  calculations!: ICalculation<unknown>[];

  searchQuery = '';
  filteredCalculations!: ICalculation<unknown>[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private locationService: LocationService,
    private calculationService: CalculationService<unknown>,
  ) {}

  ngOnInit() {
    const locationId = this.route.snapshot.paramMap.get('id') ?? '';
    this.locationService.get(locationId).subscribe((location) => (this.location = location));

    this.calculationService
      .list(locationId)
      .subscribe((calculations) => (this.calculations = this.filteredCalculations = calculations));
  }

  search() {
    this.filteredCalculations = this.calculations.filter((calculation) =>
      calculation.name.toLowerCase().includes(this.searchQuery.toLowerCase()),
    );
  }

  save() {
    this.locationService.update(this.location);
  }

  delete() {
    this.locationService
      .delete(this.location)
      .subscribe(() => this.router.navigate(['/locations']));
  }
}

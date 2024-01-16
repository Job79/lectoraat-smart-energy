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
  ConfirmModalComponent,
  ToastService,
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
    ConfirmModalComponent,
  ],
  providers: [LocationService, CalculationService],
  templateUrl: './location-detail.component.html',
})
export class LocationDetailComponent implements OnInit {
  calculationDescriptions = CalculationDescriptions;
  location = {} as ILocation;
  calculations = [] as ICalculation<unknown>[];

  searchQuery = '';
  filteredCalculations = [] as ICalculation<unknown>[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private locationService: LocationService,
    private calculationService: CalculationService<unknown>,
    private toastService: ToastService,
  ) {}

  ngOnInit() {
    const locationId = this.route.snapshot.paramMap.get('id') ?? '';
    this.locationService
      .get(locationId)
      .pipe(this.toastService.errorHandler('Locatie kan niet worden geladen'))
      .subscribe((location) => (this.location = location));

    this.calculationService
      .list(locationId)
      .pipe(this.toastService.errorHandler('Berekeningen kunnen niet worden geladen'))
      .subscribe((calculations) => (this.calculations = this.filteredCalculations = calculations));
  }

  search() {
    this.filteredCalculations = this.calculations.filter((calculation) =>
      calculation.name.toLowerCase().includes(this.searchQuery.toLowerCase()),
    );
  }

  save() {
    this.locationService
      .update(this.location)
      .pipe(this.toastService.errorHandler('Locatie opslaan mislukt'))
      .subscribe(() => this.toastService.show('Locatie is opgeslagen', 'success'));
  }

  delete() {
    this.locationService
      .delete(this.location)
      .pipe(this.toastService.errorHandler('Locatie verwijderen mislukt'))
      .subscribe(() => {
        this.toastService.show('Locatie is verwijderd', 'success');
        this.router.navigate(['/locations']);
      });
  }
}

import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import {
  AuthService,
  CalculationDescriptions,
  CalculationService,
  CreateLocationModalComponent,
  ICalculation,
  IconLogoComponent,
  LocationService,
  HeaderComponent,
  IconReloadComponent,
  ConfirmModalComponent,
  ToastService,
} from '@smart-energy/core';
import { CalculationHistoryService } from '../../services/calculation-history.service';
import { SearchLocationModalComponent } from '../search-location-modal/search-location-modal.component';

@Component({
  selector: 'smart-energy-calculator',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SearchLocationModalComponent,
    CreateLocationModalComponent,
    HeaderComponent,
    IconLogoComponent,
    IconReloadComponent,
    ConfirmModalComponent,
  ],
  providers: [CalculationHistoryService, LocationService],
  templateUrl: './calculator.component.html',
})
export class CalculatorComponent implements OnInit, OnChanges, OnDestroy {
  calculationDescriptions = CalculationDescriptions;

  @Input() calculation = {} as ICalculation<unknown>;
  @Output() calculationChange = new EventEmitter();

  @ViewChild('calculationForm') calculationForm!: NgForm;
  selectedLocationName = '';
  hidePdfComment = false;

  constructor(
    private router: Router,
    private locationService: LocationService,
    private calculationHistory: CalculationHistoryService,
    private calculationService: CalculationService<unknown>,
    private authService: AuthService,
    private toastService: ToastService,
  ) {}

  ngOnInit() {
    if (!this.calculation.id) {
      const previousCalculation = this.calculationHistory.get(this.calculation.type);
      if (previousCalculation) {
        this.calculationChange.emit(previousCalculation);
      }
    }
  }

  ngOnChanges() {
    if (this.isAuthenticated && this.calculation.location) {
      this.locationService
        .get(this.calculation.location)
        .pipe(this.toastService.errorHandler('Locatie kan niet worden geladen'))
        .subscribe((location) => {
          this.selectedLocationName = location.name;
        });
    }
  }

  @HostListener('window:beforeunload')
  ngOnDestroy() {
    if (!this.calculation.id) {
      this.calculationHistory.set(this.calculation);
    }
  }

  async save() {
    if (!this.isAuthenticated) {
      await this.router.navigate(['/login']);
      return;
    }

    this.calculationForm.form.markAllAsTouched();
    if (!this.calculationForm.form.valid) {
      return;
    }

    this.calculationService
      .save(this.calculation)
      .pipe(this.toastService.errorHandler('Berekening opslaan mislukt'))
      .subscribe((calculation) => {
        this.toastService.show('Berekening is opgeslagen', 'success');
        this.calculation = calculation; // prevent ngOnDestroy from saving to history
        this.calculationHistory.clear(calculation.type);
        this.router.navigate(['/calculators', calculation.type, calculation.id], {
          replaceUrl: true,
        });
      });
  }

  clear() {
    this.calculationHistory.clear(this.calculation.type);
    this.selectedLocationName = '';
    this.calculationChange.emit({
      type: this.calculation.type,
      parameters: {},
    });
  }

  delete() {
    this.calculationService
      .delete(this.calculation.id!)
      .pipe(this.toastService.errorHandler('Berekening verwijderen mislukt'))
      .subscribe(() => {
        this.toastService.show('Berekening is verwijderd', 'success');
        this.router.navigate(['/calculators', this.calculation.type], { replaceUrl: true });
      });
  }

  pdf(hidePdfComment: boolean) {
    this.hidePdfComment = hidePdfComment;
    setTimeout(() => window.print(), 50);
  }

  get isAuthenticated() {
    return this.authService.user$.value.isLoggedIn;
  }
}

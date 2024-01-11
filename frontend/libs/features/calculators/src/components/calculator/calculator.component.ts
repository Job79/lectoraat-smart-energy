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
import { AuthService, CalculationService, ICalculation, LocationService } from '@smart-energy/core';
import { CalculationHistoryService } from '../../services/calculation-history.service';
import { SearchLocationModalComponent } from '../search-location-modal/search-location-modal.component';
import { CreateLocationModalComponent } from '../create-location-modal/create-location-modal.component';

@Component({
  selector: 'smart-energy-calculator',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SearchLocationModalComponent,
    CreateLocationModalComponent,
  ],
  providers: [CalculationHistoryService, LocationService],
  templateUrl: './calculator.component.html',
})
export class CalculatorComponent implements OnInit, OnChanges, OnDestroy {
  @Input() title = '';
  @Input() description = '';
  @Input() calculation = {} as ICalculation<unknown>;

  @Output() calculationChange = new EventEmitter();
  @Output() downloadPdfClick = new EventEmitter();

  @ViewChild('calculationForm') calculationForm!: NgForm;
  selectedLocationName = '';
  hidePdfComment = false;

  constructor(
    private router: Router,
    private locationService: LocationService,
    private calculationHistory: CalculationHistoryService,
    private calculationService: CalculationService<unknown>,
    private authService: AuthService,
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
    if (this.calculation.location) {
      this.locationService.get(this.calculation.location).subscribe((location) => {
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
    if (!this.authService.user$.value.isLoggedIn) {
      await this.router.navigate(['/login']);
      return;
    }

    this.calculationForm.form.markAllAsTouched();
    if (!this.calculationForm.form.valid) {
      return;
    }

    this.calculationService.save(this.calculation).subscribe((calculation) => {
      this.calculation = calculation;
      this.calculationHistory.clear(calculation.type);
      this.router.navigate(['/calculators', calculation.type, calculation.id], {
        replaceUrl: true,
      });
    });
  }

  clear() {
    this.calculationHistory.clear(this.calculation.type);
    this.calculationChange.emit({
      type: this.calculation.type,
      parameters: {},
    });
  }

  delete() {
    this.calculationService.delete(this.calculation.id!).subscribe(() => {
      this.router.navigate(['/calculators', this.calculation.type], { replaceUrl: true });
    });
  }

  pdf(hidePdfComment: boolean) {
    this.hidePdfComment = hidePdfComment;
    window.print();
  }
}

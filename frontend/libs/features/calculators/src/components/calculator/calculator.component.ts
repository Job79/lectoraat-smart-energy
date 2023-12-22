import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router, RouterModule } from '@angular/router';
import { AuthService, ICalculation, ILocation } from '@smart-energy/core';
import { LocationService } from '../../services/location.service';
import { CalculationService } from '../../services/calculation.service';
import { CalculationHistoryService } from '../../services/calculation-history.service';

@Component({
  selector: 'smart-energy-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  providers: [LocationService, CalculationHistoryService],
  templateUrl: './calculator.component.html',
})
export class CalculatorComponent implements OnInit, OnDestroy {
  @Input() title = '';
  @Input() calculation = {} as ICalculation<unknown>;

  @Output() calculationChange = new EventEmitter();
  @Output() downloadPdfClick = new EventEmitter();

  locations$!: Observable<ILocation[]>;

  constructor(
    private router: Router,
    private calculationHistory: CalculationHistoryService,
    private locationService: LocationService,
    private calculationService: CalculationService<unknown>,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
    this.locations$ = this.locationService.list();

    if (!this.calculation.id) {
      const previousCalculation = this.calculationHistory.get(this.calculation.calculationType);
      if (previousCalculation) {
        this.calculationChange.emit(previousCalculation);
      }
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

    if (this.calculation.id) {
      this.calculationService.update(this.calculation);
    } else {
      this.calculationService.create(this.calculation);
    }
  }

  clear() {
    if (this.calculation.id) {
      this.calculation = { ...this.calculation, parameters: {} } as ICalculation<unknown>;
    } else {
      this.calculation = {
        calculationType: this.calculation.calculationType,
        parameters: {},
      } as ICalculation<unknown>;
      this.calculationHistory.set(this.calculation);
    }

    this.calculationChange.emit(this.calculation);
  }
}

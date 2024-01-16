import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CalculatorComponent } from '../../../components/calculator/calculator.component';
import { ISingleDoubleRateParameters, SingleDoubleRateFormula } from './single-double-rate.formula';
import { FormsModule } from '@angular/forms';
import { CalculationService, ICalculation, ToastService } from '@smart-energy/core';

@Component({
  selector: 'smart-energy-calculator-single-double-rate',
  standalone: true,
  imports: [CommonModule, CalculatorComponent, FormsModule],
  providers: [CalculationService],
  templateUrl: './single-double-rate.component.html',
  styles: '@page { size: 210mm 305mm; }',
})
export class SingleDoubleRateComponent implements OnInit {
  calculation = {
    type: 'single-double-rate',
    parameters: {},
  } as ICalculation<ISingleDoubleRateParameters>;

  constructor(
    private calculationService: CalculationService<ISingleDoubleRateParameters>,
    private route: ActivatedRoute,
    private toastService: ToastService,
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      return;
    }

    this.calculationService
      .get(id)
      .pipe(this.toastService.errorHandler('Berekening kan niet worden geladen'))
      .subscribe((calculation) => {
        if (calculation.type === 'single-double-rate') {
          this.calculation = calculation;
        }
      });
  }

  get formula() {
    return new SingleDoubleRateFormula(this.calculation.parameters);
  }
}

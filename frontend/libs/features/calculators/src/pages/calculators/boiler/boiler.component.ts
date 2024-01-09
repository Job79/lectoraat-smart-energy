import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CalculatorComponent } from '../../../components/calculator/calculator.component';
import { BoilerFormula, EnergyLabels, IBoilerParameters } from './boiler.formula';
import { FormsModule } from '@angular/forms';
import { CalculationService, ICalculation } from '@smart-energy/core';

@Component({
  selector: 'smart-energy-calculator-boiler',
  standalone: true,
  imports: [CommonModule, CalculatorComponent, FormsModule],
  providers: [CalculationService],
  templateUrl: './boiler.component.html',
})
export class BoilerComponent implements OnInit {
  calculation = {
    type: 'boiler',
    parameters: {},
  } as ICalculation<IBoilerParameters>;

  energyLabels = Object.keys(EnergyLabels);

  constructor(
    private calculationService: CalculationService<IBoilerParameters>,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      return;
    }

    this.calculationService.get(id).subscribe((calculation) => {
      if (calculation.type === 'boiler') {
        this.calculation = calculation;
      }
    });
  }

  get formula() {
    return new BoilerFormula(this.calculation.parameters);
  }
}

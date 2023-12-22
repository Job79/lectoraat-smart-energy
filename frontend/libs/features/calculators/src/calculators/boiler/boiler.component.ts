import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CalculatorComponent } from '../../components/calculator/calculator.component';
import { BoilerFormula, EnergyLabels, IBoilerParameters } from './boiler.formula';
import { CalculationService } from '../../services/calculation.service';
import { FormsModule } from '@angular/forms';
import { ICalculation } from '@smart-energy/core';

@Component({
  selector: 'smart-energy-calculator-boiler',
  standalone: true,
  imports: [CommonModule, CalculatorComponent, FormsModule],
  providers: [CalculationService],
  templateUrl: './boiler.component.html',
})
export class BoilerComponent implements OnInit {
  boiler = {
    calculationType: 'boiler',
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

    this.calculationService.get(id).subscribe((boiler) => {
      if (boiler.calculationType === 'boiler') {
        this.boiler = boiler;
      }
    });
  }

  get boilerFormula() {
    return new BoilerFormula(this.boiler.parameters);
  }
}

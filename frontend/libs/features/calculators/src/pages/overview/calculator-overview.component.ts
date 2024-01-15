import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  CalculationDescriptions,
  IconCalculatorsComponent,
  HeaderComponent,
  SearchComponent,
  TooltipComponent,
} from '@smart-energy/core';

@Component({
  selector: 'smart-energy-calculator-overview',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SearchComponent,
    TooltipComponent,
    HeaderComponent,
    IconCalculatorsComponent,
  ],
  templateUrl: './calculator-overview.component.html',
})
export class CalculatorOverviewComponent {
  allCalculators = Object.entries(CalculationDescriptions).map(([k, v]) => ({
    type: k,
    name: v.name,
    description: v.description,
  }));
  calculators = this.allCalculators;
  searchQuery = '';

  search() {
    this.calculators = this.allCalculators.filter((calculator) =>
      calculator.name.toLowerCase().includes(this.searchQuery.toLowerCase()),
    );
  }
}

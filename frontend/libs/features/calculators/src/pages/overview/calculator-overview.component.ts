import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SearchComponent, TooltipComponent } from '@smart-energy/core';

@Component({
  selector: 'smart-energy-calculator-overview',
  standalone: true,
  imports: [CommonModule, RouterModule, SearchComponent, TooltipComponent],
  templateUrl: './calculator-overview.component.html',
})
export class CalculatorOverviewComponent {
  allCalculators = [
    {
      type: 'boiler',
      name: 'Boiler',
      description: 'Bereken het energieverlies van een boiler.',
    },
    {
      type: 'single-double-rate',
      name: 'Enkel-dubbel tarief',
      description: 'Vergelijk de kosten voor een enkel- en dubbeltarief aansluiting.',
    },
  ];
  searchQuery = '';
  calculators = this.allCalculators;

  search() {
    this.calculators = this.allCalculators.filter((calculator) =>
      calculator.name.toLowerCase().includes(this.searchQuery.toLowerCase()),
    );
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'smart-energy-calculator-overview',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './calculator-overview.component.html',
})
export class CalculatorOverviewComponent {
  calculators: string[] = ['boiler'];
}

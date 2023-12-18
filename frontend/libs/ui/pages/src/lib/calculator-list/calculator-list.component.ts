import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'lectoraat-smart-energy-calculator-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './calculator-list.component.html',
  styleUrl: './calculator-list.component.css',
})
export class CalculatorListComponent {
  calculators: string[] = ['boiler'];

  constructor() {}
}

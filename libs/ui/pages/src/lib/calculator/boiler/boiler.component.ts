import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoilerService } from '../boiler.servise';
import { FormsModule } from '@angular/forms';
import {
  Boiler,
  EnergyLabel,
  EnergyLabelKeys,
} from '@lectoraat-smart-energy/shared';

@Component({
  selector: 'lectoraat-smart-energy-boiler',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [BoilerService],
  templateUrl: './boiler.component.html',
  styleUrl: './boiler.component.css',
})
export class BoilerComponent {
  energyLabels = EnergyLabelKeys;
  boiler: Boiler = {} as Boiler;

  constructor(private boilerService: BoilerService) {}

  getBoilers() {
    this.boilerService.getBoilers();
  }

  onSubmit() {
    this.boilerService.storeCalculation(this.boiler);
    console.log(this.boiler);
  }
}

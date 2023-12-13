import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Boiler, EnergyLabel } from '@lectoraat-smart-energy/shared';

@Component({
  selector: 'lectoraat-smart-energy-boiler-result',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './boiler-result.component.html',
  styleUrl: './boiler-result.component.css',
})
export class BoilerResultComponent {
  @Input()
  boiler: Boiler = {} as Boiler;

  get costHeatingOnce(): number {
    const result =
      this.energyRequiredForHeating && this.boiler.price
        ? (this.energyRequiredForHeating * this.boiler.price) / 100
        : 0;
    return this.roundToDecimals(result);
  }

  get energyRequiredForHeating(): number {
    const result = this.boiler.liter
      ? (this.boiler.liter * 4186 * (70 - 15)) / 3600000
      : 0;
    return this.roundToDecimals(result);
  }

  get timeRequiredForHeating(): number {
    const result =
      this.energyRequiredForHeating && this.boiler.power
        ? this.energyRequiredForHeating / this.boiler.power
        : 0;
    return this.roundToDecimals(result);
  }

  get costStandby(): number {
    const boilerEnergyLabelValue = Number(EnergyLabel[this.boiler.energyLabel]);

    const result = boilerEnergyLabelValue
      ? (boilerEnergyLabelValue * 24) / 1000
      : 0;
    return this.roundToDecimals(result);
  }

  get constStandbyAnnual(): number {
    const standbyCost = this.costStandby;

    const result = standbyCost !== undefined ? standbyCost * 365 : 0;

    return this.roundToDecimals(result);
  }

  private roundToDecimals(value: number | undefined): number {
    return value !== undefined ? Number(value.toFixed(2)) : 0;
  }
}

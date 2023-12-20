import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Boiler, EnergyLabels } from '@lectoraat-smart-energy/shared';

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
        ? this.energyRequiredForHeating * this.boiler.price
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
        ? this.energyRequiredForHeating / (this.boiler.power / 1000) // Converting Watt into Kilowatt is devide by 1000
        : 0;
    return this.roundToDecimals(result);
  }

  get costStandby(): number {
    if (!this.boiler.energyLabel || !this.boiler.liter) {
      return 0;
    }

    const boilerEnergyLabelValue = EnergyLabels[this.boiler.energyLabel](
      this.boiler.liter,
    );

    const result = (boilerEnergyLabelValue * 24) / 1000;
    return this.roundToDecimals(result);
  }

  get energyStandbyAnnual(): number {
    const standbyCost = this.costStandby;

    const result = standbyCost !== undefined ? standbyCost * 365 : 0;

    return this.roundToDecimals(result);
  }

  private roundToDecimals(value: number | undefined): number {
    return value !== undefined ? Number(value.toFixed(2)) : 0;
  }
}

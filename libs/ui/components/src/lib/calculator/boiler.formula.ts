import { Boiler, EnergyLabels } from '@lectoraat-smart-energy/shared';

export class BoilerFormula {
  boiler: Boiler;

  constructor(boiler: Boiler) {
    this.boiler = boiler;
  }

  public get costHeatingOnce(): number {
    const result =
      this.energyRequiredForHeating && this.boiler.price
        ? (this.energyRequiredForHeating * this.boiler.price) / 100
        : 0;
    return this.roundToDecimals(result);
  }

  public get energyRequiredForHeating(): number {
    const result = this.boiler.liter
      ? (this.boiler.liter * 4186 * (70 - 15)) / 3600000
      : 0;
    return this.roundToDecimals(result);
  }

  public get timeRequiredForHeating(): number {
    const result =
      this.energyRequiredForHeating && this.boiler.power
        ? this.energyRequiredForHeating / this.boiler.power
        : 0;
    return this.roundToDecimals(result);
  }

  public get costStandby(): number {
    if (!this.boiler.energyLabel || !this.boiler.liter) {
      return 0;
    }

    const boilerEnergyLabelValue = EnergyLabels[this.boiler.energyLabel](
      this.boiler.liter,
    );

    const result = (boilerEnergyLabelValue * 24) / 1000;
    return this.roundToDecimals(result);
  }

  public get energyStandbyAnnual(): number {
    const standbyCost = this.costStandby;

    const result = standbyCost !== undefined ? standbyCost * 365 : 0;

    return this.roundToDecimals(result);
  }

  private roundToDecimals(value: number | undefined): number {
    return value !== undefined ? Number(value.toFixed(2)) : 0;
  }
}

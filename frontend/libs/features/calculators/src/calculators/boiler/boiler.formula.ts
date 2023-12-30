export interface IBoilerParameters {
  boilerCapacity: number;
  pricePerKwh: number;
  powerOfBoiler: number;
  energyLabelOfBoiler: keyof typeof EnergyLabels;
}

export const EnergyLabels = {
  'A+': (liter: number) => 5.5 + 3.16 * Math.pow(liter, 0.4),
  A: (liter: number) => 8.5 + 4.25 * Math.pow(liter, 0.4),
  B: (liter: number) => 12 + 5.93 * Math.pow(liter, 0.4),
  C: (liter: number) => 16.66 + 8.33 * Math.pow(liter, 0.4),
  D: (liter: number) => 21 + 10.33 * Math.pow(liter, 0.4),
  E: (liter: number) => 26 + 13.66 * Math.pow(liter, 0.4),
  F: (liter: number) => 31 + 16.66 * Math.pow(liter, 0.4),
  G: (liter: number) => 31 + 16.66 * Math.pow(liter, 0.4),
};

export class BoilerFormula {
  constructor(private params: IBoilerParameters) {}

  get costHeatingOnce() {
    if (!this.energyRequiredForHeating || !this.params.pricePerKwh) {
      return 0;
    }

    return +(this.energyRequiredForHeating * this.params.pricePerKwh).toFixed(2);
  }

  get timeRequiredForHeating() {
    if (!this.energyRequiredForHeating || !this.params.powerOfBoiler) {
      return 0;
    }

    return +(this.energyRequiredForHeating / (this.params.powerOfBoiler / 1000)).toFixed(2);
  }

  get energyRequiredForHeating() {
    if (!this.params.boilerCapacity) {
      return 0;
    }

    return +((this.params.boilerCapacity * 4186 * (70 - 15)) / 3600000).toFixed(2);
  }

  get costsEnergyLossPerYear() {
    if (!this.energyLossPerDay) {
      return 0;
    }

    return +(this.energyLossPerDay * 365).toFixed(2);
  }

  get energyLossPerDay() {
    if (!this.params.energyLabelOfBoiler || !this.params.boilerCapacity) {
      return 0;
    }

    const energyLabelValue = EnergyLabels[this.params.energyLabelOfBoiler](
      this.params.boilerCapacity,
    );
    return +((energyLabelValue * 24) / 1000).toFixed(2);
  }
}

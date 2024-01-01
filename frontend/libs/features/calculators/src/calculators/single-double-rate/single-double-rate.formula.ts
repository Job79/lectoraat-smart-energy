export interface ISingleDoubleRateParameters {
  normalElectricityUsage: number;
  normalReturnElectricity: number;
  offPeakElectricityUsage: number;
  offPeakReturnElectricity: number;

  normalPricePerKwh: number;
  offPeakPricePerKwh: number;
  singleRatePricePerKwh: number;
}

export class SingleDoubleRateFormula {
  constructor(private params: ISingleDoubleRateParameters) {}

  get singleRatePrice() {
    if (!this.params.singleRatePricePerKwh) {
      return 0;
    }

    const usedElectricity =
      (this.params.normalElectricityUsage ?? 0) -
      (this.params.normalReturnElectricity ?? 0) +
      ((this.params.offPeakElectricityUsage ?? 0) - (this.params.offPeakReturnElectricity ?? 0));

    return +(usedElectricity * this.params.singleRatePricePerKwh).toFixed(2);
  }

  get doubleRatePrice() {
    if (!this.params.normalPricePerKwh || !this.params.offPeakPricePerKwh) {
      return 0;
    }

    const normalElectricityUsage =
      (this.params.normalElectricityUsage ?? 0) - (this.params.normalReturnElectricity ?? 0);

    const offPeakElectricityUsage =
      (this.params.offPeakElectricityUsage ?? 0) - (this.params.offPeakReturnElectricity ?? 0);

    return +(
      normalElectricityUsage * this.params.normalPricePerKwh +
      offPeakElectricityUsage * this.params.offPeakPricePerKwh
    ).toFixed(2);
  }
}

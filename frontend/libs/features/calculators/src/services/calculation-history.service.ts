import { Injectable } from '@angular/core';
import { ICalculation } from '@smart-energy/core';

@Injectable()
export class CalculationHistoryService {
  public get(calculationType: string) {
    return JSON.parse(
      localStorage.getItem(`calculation-history.${calculationType}`) ?? 'null',
    ) as ICalculation<unknown> | null;
  }

  public set(calculation: ICalculation<unknown>): void {
    localStorage.setItem(
      `calculation-history.${calculation.type}`,
      JSON.stringify(calculation),
    );
  }

  public clear(calculationType: string): void {
    localStorage.removeItem(`calculation-history.${calculationType}`);
  }
}

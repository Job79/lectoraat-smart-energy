import { ILocation } from './location.interface';

export const CalculationTypes = ['boiler', 'single-double-rate'] as const;
export interface ICalculation<T> {
  id?: string;
  name: string;
  comment?: string;

  location: ILocation['id'];
  type: (typeof CalculationTypes)[number];
  parameters: T;
}

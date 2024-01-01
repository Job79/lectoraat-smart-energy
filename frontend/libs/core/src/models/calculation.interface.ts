import { ILocation } from './location.interface';

export const CalculationTypes = ['boiler', 'single-double-rate'] as const;
export type CalculationType = (typeof CalculationTypes)[number];

export interface ICalculation<T> {
  id?: string;
  name: string;
  comment?: string;

  location: ILocation['id'];
  type: CalculationType;
  parameters: T;
}

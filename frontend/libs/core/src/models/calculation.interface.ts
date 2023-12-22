import { ILocation } from './location.interface';

export const CalculationTypes = ['boiler'] as const;
export interface ICalculation<T> {
  id?: string;
  name: string;
  comment?: string;

  location: ILocation['id'];
  calculationType: (typeof CalculationTypes)[number];
  parameters: T;
}

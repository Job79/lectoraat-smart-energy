import { ILocation } from './location.interface';

export const CalculationDescriptions = {
  boiler: {
    name: 'Boiler',
    description: 'Bereken het energieverlies van een boiler.',
  },
  'single-double-rate': {
    name: 'Enkel-dubbel tarief',
    description: 'Vergelijk de kosten voor een enkel- en dubbeltarief aansluiting.',
  },
};

export type CalculationType = keyof typeof CalculationDescriptions;

export interface ICalculation<T> {
  id?: string;
  name: string;
  comment?: string;

  location: ILocation['id'];
  type: CalculationType;
  parameters: T;

  created: number;
  updated: number;
}

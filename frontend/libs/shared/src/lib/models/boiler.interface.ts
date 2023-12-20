import { EnergyLabel } from './energyLabels';

export interface Boiler {
  id?: string;
  name: string;
  liter: number;
  price: number;
  power: number;
  version: number;
  comment?: string;
  location: string;
  energyLabel: EnergyLabel;
  created: Date;
}

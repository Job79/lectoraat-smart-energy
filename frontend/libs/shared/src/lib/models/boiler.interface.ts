import { EnergyLabel } from './energyLabels';

export interface Boiler {
  id?: string;
  name: string;
  liter: number;
  price: number;
  power: number;
  version: number;
  comment: string;
  energyLabel: EnergyLabel;
  location: Location;
  created: Date;
}

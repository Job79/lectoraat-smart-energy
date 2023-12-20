import { EnergyLabel } from './energyLabels';

export interface Boiler {
  id?: string;
  liter: number;
  price: number;
  power: number;
  energyLabel: EnergyLabel;
  version: number;
  location: Location;
  created: Date;
}

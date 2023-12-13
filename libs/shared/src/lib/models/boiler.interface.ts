import { EnergyLabel } from './energyLabel.enum';

export interface Boiler {
  id: string;
  liter: number;
  price: number;
  power: number;
  energyLabel: EnergyLabel;
  version: number;
}

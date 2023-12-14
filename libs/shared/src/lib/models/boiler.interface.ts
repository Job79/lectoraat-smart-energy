import { Building } from './building.interface';
import { EnergyLabel } from './energyLabel.enum';

export interface Boiler {
  id?: string;
  liter: number;
  price: number;
  power: number;
  energyLabel: EnergyLabel;
  building: string;
  version: number;
}

import { IUser } from './user.interface';

export interface ILocation {
  id?: string;
  name: string;
  residence: string;
  postalCode: string;
  owner: IUser['id'];

  created: number;
  updated: number;
}

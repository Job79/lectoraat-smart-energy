import PocketBase, { RecordService } from 'pocketbase';
import { IUser } from './user.interface';
import { ILocation } from './location.interface';
import { ICalculation } from './calculation.interface';

export interface IPocketBase extends PocketBase {
  collection(idOrName: string): RecordService;
  collection(idOrName: 'users'): RecordService<IUser>;
  collection(idOrName: 'locations'): RecordService<ILocation>;
  collection(idOrName: 'calculations'): RecordService<ICalculation<unknown>>;
}

import PocketBase, { RecordService } from 'pocketbase';
import { Boiler } from './boiler.interface';
import { Location } from './location.interface';
import { User } from './user.interface';

export interface IPocketBase extends PocketBase {
  collection(idOrName: string): RecordService;
  collection(idOrName: 'boilers'): RecordService<Boiler>;
  collection(idOrName: 'users'): RecordService<User>;
  collection(idOrName: 'locations'): RecordService<Location>;
}

import PocketBase, { RecordService } from 'pocketbase';
import { Boiler } from './boiler.interface';
import { User } from './user.interface';

export interface TypedPocketBase extends PocketBase {
  collection(idOrName: string): RecordService;
  collection(idOrName: 'boilers'): RecordService<Boiler>;
  collection(idOrName: 'users'): RecordService<User>;
}

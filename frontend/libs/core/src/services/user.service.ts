import { Inject, Injectable } from '@angular/core';
import { IUser } from '../models/user.interface';
import { IPocketBase } from '../models/pocketbase.interface';
import { from } from 'rxjs';

@Injectable()
export class UserService {
  constructor(@Inject('pocketbase') private pb: IPocketBase) {}

  public list() {
    return from(this.pb.collection('users').getFullList());
  }

  public get(id: string) {
    return from(this.pb.collection('users').getOne(id));
  }

  public create(user: IUser) {
    return from(this.pb.collection('users').create(user));
  }

  public update(user: IUser) {
    return from(this.pb.collection('users').update(user.id!, user));
  }

  delete(user: IUser) {
    return from(this.pb.collection('users').delete(user.id!));
  }
}

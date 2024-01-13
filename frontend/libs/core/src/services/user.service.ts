import { Inject, Injectable } from '@angular/core';
import { IUser } from '../models/user.interface';
import { IPocketBase } from '../models/pocketbase.interface';
import { from, map } from 'rxjs';

@Injectable()
export class UserService {
  constructor(@Inject('pocketbase') private pb: IPocketBase) {}

  public list({ query = '', page = 1, pageSize = 25 } = {}) {
    return from(
      this.pb.collection('users').getList(page, pageSize, {
        sort: '-created',
        filter: query ? `email ~ "${query}"` : '',
      }),
    ).pipe(map(({ items }) => items));
  }

  public get(id: string) {
    return from(this.pb.collection('users').getOne(id));
  }

  public create(user: IUser) {
    user.emailVisibility = true;
    return from(this.pb.collection('users').create(user));
  }

  public update(user: IUser) {
    return from(this.pb.collection('users').update(user.id!, user));
  }

  public delete(user: IUser) {
    return from(this.pb.collection('users').delete(user.id!));
  }
}

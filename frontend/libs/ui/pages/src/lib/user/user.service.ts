import { Injectable } from '@angular/core';
import {
  Boiler,
  TypedPocketBase,
  User,
  environment,
} from '@lectoraat-smart-energy/shared';
import PocketBase from 'pocketbase';
import { Observable, from } from 'rxjs';

@Injectable()
export class UserService {
  pb = new PocketBase(environment.pocketbase) as TypedPocketBase;

  public getUsers(): Observable<User[]> {
    const users = from(
      this.pb.collection('users').getFullList({
        sort: '-created',
      }),
    );
    return users;
  }

  public getUser(id: string): Observable<User> {
    const user = from(this.pb.collection('users').getOne(id));
    return user;
  }

  public async create(user: User) {
    console.log(user);
    user.passwordConfirm = user.password;
    const record = await this.pb.collection('users').create(user);
  }
}

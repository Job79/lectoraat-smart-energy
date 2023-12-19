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
    // users.subscribe((userList) => {
    //   console.log(userList);
    // });
    return users;
  }
}

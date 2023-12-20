import { Inject, Injectable } from '@angular/core';
import { IPocketBase, User } from '@lectoraat-smart-energy/shared';
import { Observable, from } from 'rxjs';

@Injectable()
export class UserService {
  constructor(@Inject('pocketbase') private pb: IPocketBase) {}

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
    await this.pb.collection('users').create(user);
  }

  public async delete(id: string) {
    await this.pb.collection('users').delete(id);
  }
}

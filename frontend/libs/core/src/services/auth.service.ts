import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUser } from '../models/user.interface';
import { IPocketBase } from '../models/pocketbase.interface';

@Injectable({ providedIn: 'root' })
export class AuthService {
  user$ = new BehaviorSubject({
    data: this.pb.authStore.model as IUser,
    isLoggedIn: this.pb.authStore.isValid && (this.pb.authStore.model as IUser).hasSetupAccount,
  });

  constructor(@Inject('pocketbase') private pb: IPocketBase) {}

  public async login(email: string, password: string) {
    try {
      const response = await this.pb.collection('users').authWithPassword(email, password);

      this.user$.next({
        data: response.record,
        isLoggedIn: response.record.hasSetupAccount,
      });
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  public async logout() {
    this.pb.authStore.clear();
    this.user$.next({
      data: {} as IUser,
      isLoggedIn: false,
    });
  }

  public async delete() {
    try {
      await this.pb.collection('users').delete(this.user$.value.data!.id!);
      await this.logout();
    } catch (error) {
      console.error(error);
    }
  }
}

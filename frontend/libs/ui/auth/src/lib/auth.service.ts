import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IPocketBase, User } from '@lectoraat-smart-energy/shared';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthService {
  account$ = new BehaviorSubject<{
    user: User;
    isAdmin: boolean;
    isLoggedIn: boolean;
  }>({
    user: this.pb.authStore.model as User,
    isAdmin: this.pb.authStore.isAdmin,
    isLoggedIn: this.pb.authStore.isValid,
  });

  constructor(
    @Inject('pocketbase') private pb: IPocketBase,
    private router: Router,
  ) {}

  public async login(user: User) {
    try {
      const response = await this.pb
        .collection('users')
        .authWithPassword(user.email, user.password);

      this.account$.next({
        user: response.record,
        isAdmin: false,
        isLoggedIn: true,
      });
      await this.router.navigate(['/']);
      return;
    } catch (error) {
      console.error(error);
    }

    try {
      const response = await this.pb.admins.authWithPassword(
        user.email,
        user.password,
      );

      this.account$.next({
        user: response.admin as unknown as User,
        isAdmin: true,
        isLoggedIn: true,
      });
      await this.router.navigate(['/']);
    } catch (error) {
      console.error(error);
    }
  }

  public async logout() {
    this.pb.authStore.clear();
    this.account$.next({
      user: {} as User,
      isAdmin: false,
      isLoggedIn: false,
    });
  }
}

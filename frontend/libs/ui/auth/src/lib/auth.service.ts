import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IPocketBase, User } from '@lectoraat-smart-energy/shared';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$ = new BehaviorSubject({
    data: this.pb.authStore.model as User,
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

      this.user$.next({
        data: response.record,
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

      this.user$.next({
        data: response.admin as unknown as User,
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
    this.user$.next({
      data: {} as User,
      isAdmin: false,
      isLoggedIn: false,
    });
  }
}

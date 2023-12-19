import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IPocketBase, User } from '@lectoraat-smart-energy/shared';

@Injectable()
export class AuthService {
  constructor(
    @Inject('pocketbase') private pb: IPocketBase,
    private router: Router,
  ) {}

  public async login(user: User) {
    try {
      await this.pb
        .collection('users')
        .authWithPassword(user.email, user.password);

      await this.router.navigate(['/']);
    } catch (error) {
      console.error(error);
      try {
        await this.pb.admins.authWithPassword(user.email, user.password);
        await this.router.navigate(['/']);
      } catch (error) {
        console.error(error);
      }
    }
  }

  public async logout() {
    this.pb.authStore.clear();
    await this.router.navigate(['/auth/login']);
  }

  public async getUser(): Promise<User> {
    return this.pb.authStore.model as User;
  }
}

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TypedPocketBase, User } from '@lectoraat-smart-energy/shared';
import PocketBase from 'pocketbase';

@Injectable()
export class AuthService {
  pb = new PocketBase('http://127.0.0.1:8090') as TypedPocketBase;

  constructor(private router: Router) {}

  public async login(user: User) {
    try {
      await this.pb
        .collection('users')
        .authWithPassword(user.email, user.password);
      this.router.navigate(['/']);
    } catch (error) {
      console.error(error);
      try {
        await this.pb.admins.authWithPassword(user.email, user.password);
        this.router.navigate(['/']);
      } catch (error) {
        console.error(error);
      }
    }
  }

  public async logout() {
    await this.pb.authStore.clear();
    this.router.navigate(['/auth/login']);
  }

  public async getUser(): Promise<User> {
    return (await this.pb.authStore.model) as User;
  }
}

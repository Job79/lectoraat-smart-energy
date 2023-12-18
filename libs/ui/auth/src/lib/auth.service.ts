import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TypedPocketBase, User } from '@lectoraat-smart-energy/shared';
import PocketBase from 'pocketbase';

@Injectable()
export class AuthService {
  pb = new PocketBase('http://127.0.0.1:8090') as TypedPocketBase;

  constructor(private router: Router) {}

  public async login(user: User) {
    console.log('Login attempt:', user);

    try {
      const authData = await this.pb
        .collection('users')
        .authWithPassword(user.email, user.password);
      console.log('Result:', authData);
      this.router.navigate(['/']);
    } catch (error) {
      console.error(error);
      try {
        const authData = await this.pb.admins.authWithPassword(
          user.email,
          user.password,
        );
        console.log('Result:', authData);
        this.router.navigate(['/']);
      } catch (error) {
        console.error(error);
      }
    }
    // console.log((this.pb.authStore.model as User)?.id);
  }

  public async logout() {
    console.log('Logout');
    await this.pb.authStore.clear();
    this.router.navigate(['/auth/login']);
  }
}

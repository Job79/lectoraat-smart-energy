import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {
  UserService,
  IUser,
  AuthService,
  HeaderComponent,
  IconUserComponent,
  ToastService,
  PasswordToggleComponent,
} from '@smart-energy/core';

@Component({
  selector: 'smart-energy-account',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet,
    FormsModule,
    HeaderComponent,
    IconUserComponent,
    PasswordToggleComponent,
  ],
  providers: [UserService],
  templateUrl: './account.component.html',
})
export class AccountComponent {
  user = {} as IUser;
  isPasswordOldVisible = false;
  isPasswordVisible = false;
  isPasswordConfirmVisible = false;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router,
    private toastService: ToastService,
  ) {}

  ngOnInit() {
    const id = this.authService.user$.value.data?.id;
    this.userService
      .get(id!)
      .pipe(this.toastService.errorHandler('Huidige gebruiker kan niet worden geladen'))
      .subscribe((user) => {
        this.user = user;
      });
  }

  save() {
    this.userService
      .update({
        id: this.user.id!,
        oldPassword: this.user.oldPassword,
        password: this.user.password,
        passwordConfirm: this.user.passwordConfirm,
      } as IUser)
      .pipe(this.toastService.errorHandler('Account opslaan mislukt'))
      .subscribe(async () => {
        await this.authService.login(this.user.email, this.user.password);
        this.toastService.show('Account is aangepast', 'success');
      });
  }

  async logout() {
    await this.authService.logout();
    await this.router.navigate(['/']);
  }
}

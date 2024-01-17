import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  AuthService,
  IUser,
  UserService,
  environment,
  HeaderComponent,
  IconInfoComponent,
  IconUrlComponent,
  ConfirmModalComponent,
  ToastService,
} from '@smart-energy/core';
import { Router } from '@angular/router';

@Component({
  selector: 'smart-energy-info',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HeaderComponent,
    IconInfoComponent,
    IconUrlComponent,
    ConfirmModalComponent,
  ],
  providers: [UserService],
  templateUrl: './info.component.html',
})
export class InfoComponent implements OnInit {
  version = environment.version;
  user = {} as IUser;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router,
    private toastService: ToastService,
  ) {}

  ngOnInit() {
    const id = this.authService.user$.value.data.id!;
    this.userService
      .get(id)
      .pipe(this.toastService.errorHandler('Huidige gebruiker kan niet worden geladen'))
      .subscribe((user) => {
        this.user = user;
      });
  }

  async delete() {
    this.userService
      .delete(this.user)
      .pipe(this.toastService.errorHandler('Account verwijderen mislukt'))
      .subscribe(async () => {
        await this.authService.logout();
        await this.router.navigate(['/']);
      });
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IconUserComponent,
  IconUsersComponent,
  IUser,
  HeaderComponent,
  SearchComponent,
  ConfirmModalComponent,
} from '@smart-energy/core';
import { UserService } from '@smart-energy/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ResetCredentialsModalComponent } from '../../components/reset-credentials-modal/reset-credentials-modal.component';

@Component({
  selector: 'smart-energy-user-detail',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HeaderComponent,
    RouterLink,
    SearchComponent,
    IconUsersComponent,
    IconUserComponent,
    ConfirmModalComponent,
    ResetCredentialsModalComponent,
  ],
  providers: [UserService],
  templateUrl: './user-detail.component.html',
})
export class UserDetailComponent implements OnInit {
  user = {} as IUser;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      return;
    }

    this.userService.get(id).subscribe((user) => {
      this.user = user;
    });
  }

  save() {
    this.user.passwordConfirm = this.user.password;
    this.userService.update(this.user);
  }

  delete() {
    if (this.user.id) {
      this.userService.delete(this.user).subscribe(() => this.router.navigate(['/users']));
    }
  }

  generateResetPasswordUrl() {
    const length = 32;
    const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const newPassword = Array.from(crypto.getRandomValues(new Uint32Array(length)))
      .map((x) => characters[x % characters.length])
      .join('');

    this.userService.update({
      ...this.user,
      password: newPassword,
      passwordConfirm: newPassword,
      hasSetupAccount: false,
    });
  }
}

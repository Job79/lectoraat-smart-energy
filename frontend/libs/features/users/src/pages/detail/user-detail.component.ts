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
import { RandomService } from '../../services/random.service';

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
  providers: [UserService, RandomService],
  templateUrl: './user-detail.component.html',
})
export class UserDetailComponent implements OnInit {
  user = {} as IUser;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private randomService: RandomService,
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
    this.user.password = this.user.passwordConfirm =
      this.randomService.generateSecureRandomString(32);
    this.user.hasSetupAccount = false;
    this.userService.update(this.user);
  }
}

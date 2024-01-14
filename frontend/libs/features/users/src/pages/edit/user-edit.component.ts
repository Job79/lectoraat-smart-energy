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

@Component({
  selector: 'smart-energy-user-edit',
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
  ],
  providers: [UserService],
  templateUrl: './user-edit.component.html',
})
export class UserEditComponent implements OnInit {
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
    if (this.user.id) {
      this.userService.update(this.user);
    } else {
      this.userService
        .create(this.user)
        .subscribe((user) => this.router.navigate(['/users', user.id]));
    }
  }

  delete() {
    if (this.user.id) {
      this.userService.delete(this.user).subscribe(() => this.router.navigate(['/users']));
    }
  }
}

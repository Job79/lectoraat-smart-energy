import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserService, IUser, AuthService } from '@smart-energy/core';

@Component({
  selector: 'smart-energy-account',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet, FormsModule],
  providers: [UserService],
  templateUrl: './account.component.html',
})
export class AccountComponent {
  user = {} as IUser;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router,
  ) {}
  ngOnInit() {
    const id = this.authService.user$.value.data?.id;

    this.userService.get(id!).subscribe((user) => {
      this.user = user;
    });
  }

  save() {
    this.user.isActivated = true;
    this.userService
      .update(this.user)
      .subscribe(() => this.authService.user$.next({ data: this.user, isLoggedIn: true }));
  }

  async logout() {
    await this.authService.logout();
    await this.router.navigate(['/']);
  }
}

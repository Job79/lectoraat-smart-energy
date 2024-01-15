import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserService, IUser, AuthService } from '@smart-energy/core';

@Component({
  selector: 'smart-energy-account',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet, FormsModule],
  providers: [UserService],
  templateUrl: './password-reset.component.html',
})
export class PasswordResetComponent implements OnInit {
  user = {} as IUser;
  email!: string;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this.user.email = this.route.snapshot.queryParamMap.get('email') || '';
  }

  save() {
    const user = this.authService.user$.value.data!;
    user.isActivated = true;
    console.log(user);

    this.authService.login(this.user.email, this.user.oldPassword!).then(() => {
      this.userService
        .update(user)
        .subscribe(() => this.authService.user$.next({ data: user, isLoggedIn: true }));

      this.router.navigate(['/']);
    });
  }
}

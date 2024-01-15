import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { IUser } from '../../models/user.interface';
import { AuthService } from '../../services/auth.service';

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
    this.email = this.route.snapshot.queryParamMap.get('email') || '';
  }

  save() {
    this.authService.login(this.email, this.user.oldPassword!).then(() => {
      const user = {
        id: this.user.id,
        password: this.user.password,
        passwordConfirm: this.user.passwordConfirm,
      } as IUser;

      this.userService
        .update(user)
        .subscribe(() => this.authService.user$.next({
          data: this.user,
          isLoggedIn: true
        }));

      this.router.navigate(['/']);
    });
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { IUser } from '../../models/user.interface';
import { AuthService } from '../../services/auth.service';
import { IconLogoComponent } from '../../components/icons/icon-logo/icon-logo.component';

@Component({
  selector: 'smart-energy-setup-account',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet, FormsModule, IconLogoComponent],
  providers: [UserService],
  templateUrl: './setup-account.component.html',
})
export class SetupAccountComponent {
  errorMessage = '';
  credentials = {
    password: '',
    passwordConfirm: '',
  };

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  async save() {
    if (this.credentials.password !== this.credentials.passwordConfirm) {
      this.errorMessage = 'Wachtwoorden komen niet overeen';
      return;
    } else if (this.credentials.password.length < 8) {
      this.errorMessage = 'Wachtwoord moet minimaal 8 tekens lang zijn';
      return;
    }

    const email = this.route.snapshot.queryParamMap.get('email') || '';
    const token = this.route.snapshot.queryParamMap.get('token') || '';

    // Login is required, otherwise the user does not have access to update their password.
    const ok = await this.authService.login(email, token);
    if (!ok) {
      this.errorMessage = 'Reset token is ongeldig, neem contact op met de beheerder';
      return;
    }

    const user = {
      id: this.authService.user$.value.data?.id,
      oldPassword: token,
      password: this.credentials.password,
      passwordConfirm: this.credentials.passwordConfirm,
      hasSetupAccount: true,
    } as IUser;

    this.userService.update(user).subscribe(async () => {
      // Relogin to reload hasSetupAccount.
      if (!(await this.authService.login(email, this.credentials.password))) {
        this.errorMessage = 'Er is iets misgegaan, neem contact op met de beheerder';
        return;
      }

      await this.router.navigate(['/']);
    });
  }
}

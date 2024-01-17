import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { IUser } from '../../models/user.interface';
import { AuthService } from '../../services/auth.service';
import { IconLogoComponent } from '../../components/icons/icon-logo/icon-logo.component';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'smart-energy-setup-account',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet, FormsModule, IconLogoComponent],
  providers: [UserService],
  templateUrl: './setup-account.component.html',
})
export class SetupAccountComponent {
  credentials = {
    password: '',
    passwordConfirm: '',
  };

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private toastService: ToastService,
  ) {}

  async save() {
    if (this.credentials.password !== this.credentials.passwordConfirm) {
      this.toastService.show('Wachtwoorden komen niet overeen', 'error');
      return;
    } else if (this.credentials.password.length < 8) {
      this.toastService.show('Wachtwoord moet minimaal 8 tekens lang zijn', 'error');
      return;
    }

    const email = this.route.snapshot.queryParamMap.get('email') || '';
    const token = this.route.snapshot.queryParamMap.get('token') || '';

    // Login is required, otherwise the user does not have access to update their password.
    const ok = await this.authService.login(email, token);
    if (!ok) {
      this.toastService.show('Reset token is ongeldig, neem contact op met de beheerder', 'error');
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
        this.toastService.show('Er is iets misgegaan, neem contact op met de beheerder', 'error');
        return;
      }

      await this.router.navigate(['/']);
    });
  }
}

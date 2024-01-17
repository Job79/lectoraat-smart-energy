import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Location } from '@angular/common';
import { IconLogoComponent } from '../../components/icons/icon-logo/icon-logo.component';
import { ToastService } from '../../services/toast.service';
import { PasswordToggleComponent } from '../../components/utilities/password-toggle/password-toggle.component';

@Component({
  selector: 'smart-energy-login',
  standalone: true,
  imports: [CommonModule, FormsModule, IconLogoComponent, PasswordToggleComponent],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  email = '';
  password = '';
  showResetPassword = false;
  isPasswordVisible = false;

  constructor(
    private authService: AuthService,
    private location: Location,
    private toastService: ToastService,
  ) {}

  async login() {
    const ok = await this.authService.login(this.email, this.password);
    if (!ok) {
      this.showResetPassword = true;
      this.toastService.show('Login gegevens zijn onjuist', 'error');
      return;
    }

    if (!this.authService.user$.value.data?.hasSetupAccount) {
      this.toastService.show(
        'Account is nog niet ingesteld, neem contact op met de beheerder',
        'error',
      );
      await this.authService.logout();
      return;
    }

    this.location.back();
  }
}

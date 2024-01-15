import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Location } from '@angular/common';
import { IconLogoComponent } from '../../components/icons/icon-logo/icon-logo.component';

@Component({
  selector: 'smart-energy-login',
  standalone: true,
  imports: [CommonModule, FormsModule, IconLogoComponent],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  email = '';
  password = '';
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private location: Location,
  ) {}

  async login() {
    const ok = await this.authService.login(this.email, this.password);
    if (!ok) {
      this.errorMessage = 'Login gegevens zijn onjuist';
      return;
    }

    if (!this.authService.user$.value.data?.hasSetupAccount) {
      this.errorMessage = 'Account is nog niet ingesteld, neem contact op met de beheerder';
      return;
    }

    this.location.back();
  }
}

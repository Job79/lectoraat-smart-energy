import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'smart-energy-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
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
    if (ok) {
      this.location.back();
    } else {
      this.errorMessage = 'Login gegevens zijn onjuist';
    }
  }
}

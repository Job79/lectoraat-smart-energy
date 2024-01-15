import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { IconLogoComponent } from '../icons/icon-logo/icon-logo.component';

@Component({
  selector: 'smart-energy-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, IconLogoComponent],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  constructor(private authService: AuthService) {}

  get isManager() {
    return this.authService.user$.value.data?.isManager;
  }

  get isLoggedIn() {
    return this.authService.user$.value.isLoggedIn;
  }

  get initial() {
    return this.authService.user$.value.data?.email?.substring(0, 2).toUpperCase();
  }
}

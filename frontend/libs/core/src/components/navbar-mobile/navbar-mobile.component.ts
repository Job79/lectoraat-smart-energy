import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'smart-energy-navbar-mobile',
  standalone: true,
  imports: [CommonModule, RouterModule, LogoComponent],
  templateUrl: './navbar-mobile.component.html',
})
export class NavbarMobileComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  get isManager() {
    return this.authService.user$.value.data?.isManager;
  }

  get isLoggedIn() {
    return this.authService.user$.value.isLoggedIn;
  }

  get initial() {
    return this.authService.user$.value.data?.email?.substring(0, 2).toUpperCase();
  }

  async logout() {
    await this.authService.logout();
    await this.router.navigate(['/']);
  }
}

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'smart-energy-navbar-mobile',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar-mobile.component.html',
})
export class NavbarMobileComponent {
  constructor(private authService: AuthService) {}

  get isManager() {
    return this.authService.user$.value.data?.isManager;
  }

  get isLoggedIn() {
    return this.authService.user$.value.isLoggedIn;
  }
}

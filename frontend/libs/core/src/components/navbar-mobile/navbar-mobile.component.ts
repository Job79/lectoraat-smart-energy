import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { IconLogoComponent } from '../icons/icon-logo/icon-logo.component';
import { IconUsersComponent } from '../icons/icon-users/icon-users.component';
import { IconLocationsComponent } from '../icons/icon-locations/icon-locations.component';
import { IconCalculatorsComponent } from '../icons/icon-calculators/icon-calculators.component';

@Component({
  selector: 'smart-energy-navbar-mobile',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    IconLogoComponent,
    IconUsersComponent,
    IconLocationsComponent,
    IconCalculatorsComponent,
  ],
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

  get initial() {
    return this.authService.user$.value.data?.email?.substring(0, 2).toUpperCase();
  }
}

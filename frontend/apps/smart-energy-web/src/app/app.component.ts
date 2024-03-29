import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent, NavbarMobileComponent, FooterComponent } from '@smart-energy/core';
import { NgIf } from '@angular/common';
import { themeChange } from 'theme-change';
import { ToastComponent } from '@smart-energy/core';
themeChange();

@Component({
  standalone: true,
  imports: [
    RouterModule,
    NavbarComponent,
    NavbarMobileComponent,
    FooterComponent,
    NgIf,
    RouterOutlet,
    ToastComponent,
  ],
  selector: 'smart-energy-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private router: Router) {}

  get showNavigation() {
    return this.router.url === '/login' || this.router.url.startsWith('/setup-account');
  }
}

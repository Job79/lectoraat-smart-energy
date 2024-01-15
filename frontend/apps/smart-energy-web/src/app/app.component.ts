import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent, NavbarMobileComponent } from '@smart-energy/core';
import { NgIf } from '@angular/common';
import { themeChange } from 'theme-change';
themeChange();

@Component({
  standalone: true,
  imports: [
    RouterModule,
    NavbarComponent,
    NavbarMobileComponent,
    NavbarComponent,
    NgIf,
    RouterOutlet,
  ],
  selector: 'smart-energy-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private router: Router) {}

  get isAuthPage() {
    return this.router.url === '/login' || this.router.url.startsWith('/passwordreset');
  }
}

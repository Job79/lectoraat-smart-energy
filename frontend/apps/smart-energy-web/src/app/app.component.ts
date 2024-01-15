import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent, NavbarMobileComponent } from '@smart-energy/core';
import { NgIf } from '@angular/common';
import { themeChange } from 'theme-change';
import { ToastService } from '@smart-energy/core'; // Import the ToastService
import { ToastComponent } from '@smart-energy/core';
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
    ToastComponent,
  ],
  selector: 'smart-energy-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private router: Router, private toastService: ToastService) {} // Inject the ToastService

  get isAuthPage() {
    return this.router.url === '/login';
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import {
  MobileNavbarComponent,
  NavbarComponent,
} from '@lectoraat-smart-energy/ui/layout';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent, MobileNavbarComponent],
  selector: 'lectoraat-smart-energy-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private router: Router) {}

  isAuthPage(): boolean {
    const currentUrl = this.router.url;
    return currentUrl === '/auth/login' || currentUrl === '/auth/signup';
  }
}

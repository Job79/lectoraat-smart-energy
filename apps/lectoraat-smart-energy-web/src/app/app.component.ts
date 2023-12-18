import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NavbarComponent } from '@lectoraat-smart-energy/ui/layout';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent],
  selector: 'lectoraat-smart-energy-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'lectoraat-smart-energy-web';

  constructor(private router: Router) {}

  isAuthPage(): boolean {
    const currentUrl = this.router.url;
    return currentUrl === '/auth/login' || currentUrl === '/auth/signup';
  }
}

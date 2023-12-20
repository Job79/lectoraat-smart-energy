import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '@lectoraat-smart-energy/ui/auth';

@Component({
  selector: 'lectoraat-smart-energy-mobile-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './mobile-navbar.component.html',
})
export class MobileNavbarComponent implements OnInit {
  isAdmin = false;
  isLoggedIn = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.user$.subscribe((user) => {
      this.isAdmin = user.isAdmin;
      this.isLoggedIn = user.isLoggedIn;
    });
  }
}

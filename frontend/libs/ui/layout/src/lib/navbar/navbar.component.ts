import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '@lectoraat-smart-energy/ui/auth';

@Component({
  selector: 'lectoraat-smart-energy-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  providers: [AuthService],
  templateUrl: './navbar.component.html',
  styles: [],
})
export class NavbarComponent implements OnInit {
  isAdmin = false;
  isLoggedIn = false;
  initial = '';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.user$.subscribe((user) => {
      this.isAdmin = user.isAdmin;
      this.isLoggedIn = user.isLoggedIn;
      this.initial = user.data?.email?.substr(0, 2).toUpperCase();
    });
  }

  logout(): void {
    this.authService.logout();
  }
}

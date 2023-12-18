import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { User } from '@lectoraat-smart-energy/shared';
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
  imagePath?: string;
  user?: User;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {

    this.imagePath = 'assets/logo-home.svg';
    this.authService.getUser().then((user) => {
      this.user = user;
    });
  }

  logout(): void {
    this.authService.logout();
  }
}

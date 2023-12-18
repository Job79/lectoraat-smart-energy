import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '@lectoraat-smart-energy/ui/auth';

@Component({
  selector: 'lectoraat-smart-energy-navbar',
  standalone: true,
  imports: [CommonModule],
  providers: [AuthService],
  templateUrl: './navbar.component.html',
  styles: [],
})
export class NavbarComponent implements OnInit {
  imagePath?: string;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.imagePath = 'assets/logo-home.svg';
  }

  logout(): void {
    console.log('logout');
    this.authService.logout();
  }
}

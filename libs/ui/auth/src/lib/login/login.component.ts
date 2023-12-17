import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '@lectoraat-smart-energy/shared';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'lectoraat-smart-energy-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [AuthService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  user: User = {} as User;

  banner?: string;
  logo?: string;

  constructor(private authServise: AuthService) {}

  ngOnInit(): void {
    this.banner = '/assets/banner.jpeg';
    this.logo = '/assets/logo-home.svg';
  }

  login(): void {
    this.authServise.login(this.user);
  }
}

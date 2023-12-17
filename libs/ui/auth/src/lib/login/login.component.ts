import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '@lectoraat-smart-energy/shared';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'lectoraat-smart-energy-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  user: User = {} as User;

  banner?: string;
  logo?: string;

  constructor() {}

  ngOnInit(): void {
    this.banner = '/assets/banner.jpeg';
    this.logo = '/assets/logo-home.svg';
  }

  login(): void {
    console.log('login');
    console.log(this.user);
  }
}

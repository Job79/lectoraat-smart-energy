import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '@lectoraat-smart-energy/shared';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'lectoraat-smart-energy-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  user: User = {} as User;

  constructor(private authService: AuthService) {}

  login(): void {
    this.authService.login(this.user);
  }
}

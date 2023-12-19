import { Component } from '@angular/core';
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
export class LoginComponent {
  user: User = {} as User;

  constructor(private authServise: AuthService) {}

  login(): void {
    this.authServise.login(this.user);
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../user.service';
import { User } from '@lectoraat-smart-energy/shared';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'lectoraat-smart-energy-user-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [UserService],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.css',
})
export class UserEditComponent {
  user: User = {} as User;

  constructor(private userService: UserService) {}

  create() {
    this.userService.create(this.user);
  }
}

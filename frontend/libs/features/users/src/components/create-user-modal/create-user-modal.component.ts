import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IUser, UserService } from '@smart-energy/core';

@Component({
  selector: 'smart-energy-create-user-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [UserService],
  templateUrl: './create-user-modal.component.html',
})
export class CreateUserModalComponent {
  @Output() userCreated = new EventEmitter<IUser>();
  isModalOpen = false;
  user = {} as IUser;

  constructor(private userService: UserService) {}

  openModal() {
    this.isModalOpen = true;
    this.user = {} as IUser;
  }

  create() {
    this.user.passwordConfirm = this.user.password;
    this.userService.create(this.user).subscribe((user) => {
      this.userCreated.emit(user);
      this.isModalOpen = false;
    });
  }
}

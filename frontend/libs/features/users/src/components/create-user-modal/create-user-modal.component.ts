import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IUser, UserService } from '@smart-energy/core';
import { ResetCredentialsModalComponent } from '../reset-credentials-modal/reset-credentials-modal.component';

@Component({
  selector: 'smart-energy-create-user-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, ResetCredentialsModalComponent],
  providers: [UserService],
  templateUrl: './create-user-modal.component.html',
})
export class CreateUserModalComponent {
  @Output() userCreated = new EventEmitter<IUser>();
  isModalOpen = false;
  user = {} as IUser;

  @ViewChild('resetCredentialsModal') resetCredentialsModal!: ResetCredentialsModalComponent;

  constructor(private userService: UserService) {}

  openModal() {
    this.isModalOpen = true;
    this.user = {} as IUser;
  }

  create() {
    const length = 32;
    const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    this.user.password = this.user.passwordConfirm = Array.from(
      crypto.getRandomValues(new Uint32Array(length)),
    )
      .map((x) => characters[x % characters.length])
      .join('');

    this.userService.create(this.user).subscribe((user) => {
      this.userCreated.emit(user);
      this.isModalOpen = false;
      this.resetCredentialsModal.openModal();
    });
  }
}

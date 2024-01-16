import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IUser, UserService } from '@smart-energy/core';
import { ResetCredentialsModalComponent } from '../reset-credentials-modal/reset-credentials-modal.component';
import { RandomService } from '../../services/random.service';

@Component({
  selector: 'smart-energy-create-user-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, ResetCredentialsModalComponent],
  providers: [UserService, RandomService],
  templateUrl: './create-user-modal.component.html',
})
export class CreateUserModalComponent {
  @Output() userCreated = new EventEmitter<IUser>();
  isModalOpen = false;
  user = {} as IUser;

  @ViewChild('credentialsModal') credentialsModal!: ResetCredentialsModalComponent;

  constructor(
    private userService: UserService,
    private randomService: RandomService,
  ) {}

  openModal() {
    this.isModalOpen = true;
    this.user = {} as IUser;
  }

  create() {
    this.user.password = this.user.passwordConfirm =
      this.randomService.generateSecureRandomString(32);
    this.userService.create(this.user).subscribe((user) => {
      this.userCreated.emit(user);
      this.isModalOpen = false;
      this.credentialsModal.openModal();
    });
  }
}

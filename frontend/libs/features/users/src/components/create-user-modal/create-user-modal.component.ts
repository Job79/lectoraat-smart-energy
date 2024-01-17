import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { IUser, ToastService, UserService } from '@smart-energy/core';
import { ResetCredentialsModalComponent } from '../reset-credentials-modal/reset-credentials-modal.component';
import { RandomService } from '../../services/random.service';
import { catchError } from 'rxjs';

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
  @ViewChild('form') form!: NgForm;

  constructor(
    private userService: UserService,
    private randomService: RandomService,
    private toastService: ToastService,
  ) {}

  openModal() {
    this.isModalOpen = true;
    this.form.resetForm();
    this.user = {} as IUser;
  }

  create() {
    this.form.form.markAllAsTouched();
    if (!this.form.form.valid) {
      return;
    }

    this.user.password = this.user.passwordConfirm =
      this.randomService.generateSecureRandomString(32);

    this.userService
      .create(this.user)
      .pipe(
        catchError((error) => {
          if (error.data?.data?.email) {
            this.toastService.show(
              'Gebruiker aanmaken mislukt: email ongeldig of al in gebruik',
              'error',
            );
          } else {
            this.toastService.show('Gebruiker aanmaken mislukt', 'error');
          }

          throw error;
        }),
      )
      .subscribe((user) => {
        this.userCreated.emit(user);
        this.isModalOpen = false;
        this.credentialsModal.openModal();
      });
  }

  createFinished() {
    this.toastService.show('Gebruiker aangemaakt', 'success');
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IconUserComponent,
  IconUsersComponent,
  IUser,
  HeaderComponent,
  SearchComponent,
  ConfirmModalComponent,
  ToastService,
} from '@smart-energy/core';
import { UserService } from '@smart-energy/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ResetCredentialsModalComponent } from '../../components/reset-credentials-modal/reset-credentials-modal.component';
import { RandomService } from '../../services/random.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'smart-energy-user-detail',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HeaderComponent,
    RouterLink,
    SearchComponent,
    IconUsersComponent,
    IconUserComponent,
    ConfirmModalComponent,
    ResetCredentialsModalComponent,
  ],
  providers: [UserService, RandomService],
  templateUrl: './user-detail.component.html',
})
export class UserDetailComponent implements OnInit {
  user = {} as IUser;

  @ViewChild('credentialsModal') credentialsModal!: ResetCredentialsModalComponent;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private randomService: RandomService,
    private toastService: ToastService,
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      return;
    }

    this.userService
      .get(id)
      .pipe(this.toastService.errorHandler('Gebruiker ophalen mislukt'))
      .subscribe((user) => {
        this.user = user;
      });
  }

  save() {
    this.user.passwordConfirm = this.user.password;
    this.userService
      .update(this.user)
      .pipe(
        catchError((error) => {
          if ('email' in error.data.data) {
            this.toastService.show(
              'Gebruiker opslaan mislukt: email ongeldig of al in gebruik',
              'error',
            );
          } else {
            this.toastService.show('Gebruiker opslaan mislukt', 'error');
          }

          throw error;
        }),
      )
      .subscribe(() => this.toastService.show('Gebruiker opgeslagen', 'success'));
  }

  delete() {
    if (this.user.id) {
      this.userService
        .delete(this.user)
        .pipe(this.toastService.errorHandler('Gebruiker verwijderen mislukt'))
        .subscribe(() => this.router.navigate(['/users']));
      this.toastService.show('Gebruiker verwijderd', 'success');
    }
  }

  resetPassword() {
    this.user.password = this.user.passwordConfirm =
      this.randomService.generateSecureRandomString(32);

    this.user.hasSetupAccount = false;
    this.userService
      .update(this.user)
      .pipe(this.toastService.errorHandler('Wachtwoord resetten mislukt'))
      .subscribe(() => this.credentialsModal.openModal());
  }

  resetPasswordFinished() {
    this.toastService.show('Wachtwoord gereset', 'success');
  }
}

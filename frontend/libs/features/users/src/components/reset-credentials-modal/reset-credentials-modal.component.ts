import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IUser, UserService } from '@smart-energy/core';

@Component({
  selector: 'smart-energy-reset-credentials-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [UserService],
  templateUrl: './reset-credentials-modal.component.html',
})
export class ResetCredentialsModalComponent implements OnChanges {
  @Input() email = '';
  @Input() token = '';
  @Output() userCreated = new EventEmitter<IUser>();
  isModalOpen = false;

  url = '';

  ngOnChanges() {
    this.url =
      window.location.host +
      `/setup-account?email=${encodeURIComponent(this.email)}&token=${encodeURIComponent(
        this.token,
      )}`;
  }

  openModal() {
    this.isModalOpen = true;
  }

  openEmail() {
    const title = 'Smart Energy Rekentool Account';
    const body =
      'Er is een account voor u aangemaakt in ons systeem. Klik op de onderstaande link om uw account te activeren. \n\n' +
      this.url;
    window.open(
      `mailto:${this.email}?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}`,
    );
    this.isModalOpen = false;
  }

  async copy() {
    await navigator.clipboard.writeText(this.url);
    this.isModalOpen = false;
  }
}

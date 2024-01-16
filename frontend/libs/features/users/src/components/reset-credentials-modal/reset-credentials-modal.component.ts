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
  @Output() closeModal = new EventEmitter<IUser>();

  isModalOpen = false;
  url = '';

  ngOnChanges() {
    const params = new URLSearchParams();
    params.append('email', this.email);
    params.append('token', this.token);
    this.url = window.location.host + '/setup-account?' + params.toString();
  }

  openModal() {
    this.isModalOpen = true;
  }

  openEmail() {
    const params = new URLSearchParams();
    params.append('subject', 'Smart Energy Rekentool Account');
    params.append(
      'body',
      'Er is een account voor u aangemaakt in ons systeem. Klik op de onderstaande link om uw account te activeren. \n\n' +
        this.url,
    );
    window.open(`mailto:${this.email}?${params.toString()}`);

    this.closeModal.emit();
    this.isModalOpen = false;
  }

  async copy() {
    await navigator.clipboard.writeText(this.url);

    this.closeModal.emit();
    this.isModalOpen = false;
  }
}

import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { LocationService } from '../../services/location.service';
import { ILocation } from '../../models/location.interface';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'smart-energy-create-location-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [LocationService],
  templateUrl: './create-location-modal.component.html',
})
export class CreateLocationModalComponent {
  @Output() locationCreated = new EventEmitter<ILocation>();
  isModalOpen = false;
  location = {} as ILocation;

  @ViewChild('form') form!: NgForm;

  constructor(
    private locationService: LocationService,
    private authService: AuthService,
  ) {}

  openModal() {
    this.isModalOpen = true;
    this.form.resetForm();
    this.location = { owner: this.authService.user$.value.data.id } as ILocation;
  }

  create() {
    this.form.form.markAllAsTouched();
    if (!this.form.form.valid) {
      return;
    }

    this.locationService.create(this.location).subscribe((location) => {
      this.locationCreated.emit(location);
      this.isModalOpen = false;
    });
  }
}

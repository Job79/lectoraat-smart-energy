import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SearchComponent } from '../utilities/search/search.component';
import { LocationService } from '../../services/location.service';
import { ILocation } from '../../models/location.interface';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'smart-energy-create-location-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, SearchComponent, InfiniteScrollModule],
  providers: [LocationService],
  templateUrl: './create-location-modal.component.html',
})
export class CreateLocationModalComponent {
  @Output() locationCreated = new EventEmitter<ILocation>();
  isModalOpen = false;
  newLocation = {} as ILocation;

  constructor(
    private locationService: LocationService,
    private authService: AuthService,
  ) {}

  openModal() {
    this.isModalOpen = true;
    this.newLocation = { owner: this.authService.user$.value.data.id } as ILocation;
  }

  create() {
    this.locationService.create(this.newLocation).subscribe((location) => {
      this.locationCreated.emit(location);
      this.isModalOpen = false;
    });
  }
}

import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService, ILocation, LocationService, SearchComponent } from '@smart-energy/core';
import { CalculationHistoryService } from '../../services/calculation-history.service';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@Component({
  selector: 'smart-energy-create-location-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, SearchComponent, InfiniteScrollModule],
  providers: [LocationService, CalculationHistoryService],
  templateUrl: './create-location-modal.component.html'
})
export class CreateLocationModalComponent {
  @Output() locationSelect = new EventEmitter();
  isModalOpen = false;
  newLocation = {} as ILocation;

  constructor(
    private locationService: LocationService,
    private authService: AuthService
  ) {}

  openModal() {
    this.isModalOpen = true;
    this.newLocation = { owner: this.authService.user$.value.data.id } as ILocation;
  }

  create() {
    this.locationService.create(this.newLocation).subscribe(location => {
      this.locationSelect.emit(location);
      this.isModalOpen = false;
    });
  }
}

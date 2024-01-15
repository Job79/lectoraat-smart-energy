import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'smart-energy-confirm-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './confirm-modal.component.html',
})
export class ConfirmModalComponent {
  @Input() title = '';
  @Input() description = '';

  @Output() confirmClicked = new EventEmitter();
  @Output() cancelClicked = new EventEmitter();
  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }
}

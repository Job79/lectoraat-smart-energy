import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'smart-energy-password-toggle',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './password-toggle.component.html',
})
export class PasswordToggleComponent {
  @Input() isPasswordVisible!: boolean;
  @Output() isPasswordVisibleChange = new EventEmitter<boolean>();
}

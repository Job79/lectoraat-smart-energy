import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'smart-energy-icon-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon-user.component.html',
})
export class IconUserComponent {
  @Input() size = 16;
}

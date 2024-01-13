import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'smart-energy-icon-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon-users.component.html',
})
export class IconUsersComponent {
  @Input() size = 16;
}

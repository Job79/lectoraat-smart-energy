import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'smart-energy-icon-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon-info.component.html',
})
export class IconInfoComponent {
  @Input() size = 16;
}

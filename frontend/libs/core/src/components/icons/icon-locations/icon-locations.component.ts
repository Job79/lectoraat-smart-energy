import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'smart-energy-icon-locations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon-locations.component.html',
})
export class IconLocationsComponent {
  @Input() size = 16;
}

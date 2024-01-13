import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'smart-energy-icon-location',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon-location.component.html',
})
export class IconLocationComponent {
  @Input() size = 16;
}

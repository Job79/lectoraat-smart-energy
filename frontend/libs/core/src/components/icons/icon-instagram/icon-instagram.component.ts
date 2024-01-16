import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'smart-energy-icon-instagram',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon-instagram.component.html',
})
export class IconInstagramComponent {
  @Input() color1 = 'fill-primary';
}

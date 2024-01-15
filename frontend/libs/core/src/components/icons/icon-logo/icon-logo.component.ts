import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'smart-energy-icon-logo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon-logo.component.html',
})
export class IconLogoComponent {
  @Input() color1 = 'fill-primary';
  @Input() color2 = 'fill-secondary';
}

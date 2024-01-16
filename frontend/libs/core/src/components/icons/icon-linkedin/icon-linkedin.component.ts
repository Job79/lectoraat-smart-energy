import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'smart-energy-icon-linkedin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon-linkedin.component.html',
})
export class IconLinkedinComponent {
  @Input() color1 = 'fill-primary';
}

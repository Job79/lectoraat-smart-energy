import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'smart-energy-icon-twitter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon-twitter.component.html',
})
export class IconTwitterComponent {
  @Input() color1 = 'fill-primary';
}

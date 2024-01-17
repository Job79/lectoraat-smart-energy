import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'smart-energy-icon-arrow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon-arrow.component.html',
})
export class IconArrowComponent {
  @Input() size = 16;
}

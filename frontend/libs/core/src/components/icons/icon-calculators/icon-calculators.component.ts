import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'smart-energy-icon-calculators',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon-calculators.component.html',
})
export class IconCalculatorsComponent {
  @Input() size = 16;
}

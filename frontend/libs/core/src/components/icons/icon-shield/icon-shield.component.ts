import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'smart-energy-icon-shield',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon-shield.component.html',
})
export class IconShieldComponent {
  @Input() size = 16;
}

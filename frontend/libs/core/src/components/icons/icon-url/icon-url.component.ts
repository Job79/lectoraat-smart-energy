import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'smart-energy-icon-url',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon-url.component.html',
})
export class IconUrlComponent {
  @Input() size = 16;
}

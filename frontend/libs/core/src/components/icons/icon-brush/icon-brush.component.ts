import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'smart-energy-icon-brush',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon-brush.component.html',
})
export class IconBrushComponent {
  @Input() size = 16;
}

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'smart-energy-icon-reload',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon-reload.component.html',
})
export class IconReloadComponent {
  @Input() size = 16;
}

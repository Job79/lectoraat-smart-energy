import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'smart-energy-icon-youtube',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon-youtube.component.html',
})
export class IconYoutubeComponent {
  @Input() color1 = 'fill-primary';
}

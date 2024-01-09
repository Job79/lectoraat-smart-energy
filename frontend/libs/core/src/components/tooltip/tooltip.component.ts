import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'smart-energy-tooltip',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tooltip.component.html',
})
export class TooltipComponent {
  @Input() description = '';
  @Input() class = '';
}

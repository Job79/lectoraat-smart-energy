import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'smart-energy-loader',
  standalone: true,
  imports: [CommonModule],
  template: `<span class="loading loading-infinity loading-lg"></span>`,
})
export class LoaderComponent {}

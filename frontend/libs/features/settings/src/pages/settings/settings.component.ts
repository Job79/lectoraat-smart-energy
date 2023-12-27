import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'smart-energy-settings',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet],
  templateUrl: './settings.component.html',
})
export class SettingsComponent {}

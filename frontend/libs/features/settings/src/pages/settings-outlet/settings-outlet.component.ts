import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SettingsNavbarComponent } from '../settings-navbar/settings-navbar.component';

@Component({
  selector: 'smart-energy-settings-outlet',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SettingsNavbarComponent],
  templateUrl: './settings-outlet.component.html',
})
export class SettingsOutletComponent {}

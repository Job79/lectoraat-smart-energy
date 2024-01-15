import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'smart-energy-settings-navbar-mobile',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './settings-navbar-mobile.component.html',
})
export class SettingsNavbarMobileComponent {}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SettingsNavbarComponent } from '../../components/settings-navbar/settings-navbar.component';
import { SettingsNavbarMobileComponent } from '../../components/settings-navbar-mobile/settings-navbar-mobile.component';

@Component({
  selector: 'smart-energy-settings',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet,
    FormsModule,
    SettingsNavbarComponent,
    SettingsNavbarMobileComponent,
  ],
  templateUrl: './settings.component.html',
})
export class SettingsComponent {}

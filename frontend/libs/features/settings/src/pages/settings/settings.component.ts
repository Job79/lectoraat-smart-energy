import { Component, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { themeChange } from 'theme-change';
import { FormsModule } from '@angular/forms';
import { SettingsNavbarComponent } from '../../components/settings-navbar/settings-navbar.component';
import { SettingsNavbarMobileComponent } from '../../components/settings-navbar-mobile/settings-navbar-mobile.component';
themeChange();

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

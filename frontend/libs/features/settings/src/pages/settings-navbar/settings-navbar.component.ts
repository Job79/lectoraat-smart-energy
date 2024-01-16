import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import {
  ConfirmModalComponent,
  IconArrowComponent,
  IconBrushComponent,
  IconInfoComponent,
  IconShieldComponent,
  IconUserComponent,
} from '@smart-energy/core';

@Component({
  selector: 'smart-energy-settings-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    IconUserComponent,
    IconBrushComponent,
    IconInfoComponent,
    IconShieldComponent,
    IconArrowComponent,
    ConfirmModalComponent,
  ],
  templateUrl: './settings-navbar.component.html',
})
export class SettingsNavbarComponent {}

import { Component, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { themeChange } from 'theme-change';
import { FormsModule } from '@angular/forms';
themeChange();

@Component({
  selector: 'smart-energy-settings',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet, FormsModule],
  templateUrl: './settings.component.html',
})
export class SettingsComponent {
  theme!: string;

  constructor(private renderer: Renderer2) {}

  handleThemeChange() {
    localStorage.setItem('theme', this.theme);
    this.renderer.setAttribute(document.documentElement, 'data-theme', this.theme);
  }
}

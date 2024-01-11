import { Component, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'smart-energy-preferences',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './preferences.component.html',
})
export class PreferencesComponent {
  theme!: string;

  constructor(private renderer: Renderer2) {}

  handleThemeChange() {
    localStorage.setItem('theme', this.theme);
    this.renderer.setAttribute(document.documentElement, 'data-theme', this.theme);
  }
}

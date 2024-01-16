import { Component, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent, IconBrushComponent } from '@smart-energy/core';

@Component({
  selector: 'smart-energy-theme',
  standalone: true,
  imports: [CommonModule, HeaderComponent, IconBrushComponent],
  templateUrl: './theme.component.html',
})
export class ThemeComponent {
  constructor(private renderer: Renderer2) {}

  handleThemeChange(theme: string) {
    localStorage.setItem('theme', theme);
    this.renderer.setAttribute(document.documentElement, 'data-theme', theme);
  }
}

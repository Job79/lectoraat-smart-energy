import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent, IconShieldComponent } from '@smart-energy/core';

@Component({
  selector: 'smart-energy-security',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent, IconShieldComponent],
  templateUrl: './security.component.html',
})
export class SecurityComponent {}

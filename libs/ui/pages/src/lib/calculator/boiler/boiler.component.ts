import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoilerService } from '../boiler.servise';

@Component({
  selector: 'lectoraat-smart-energy-boiler',
  standalone: true,
  imports: [CommonModule],
  providers: [BoilerService],
  templateUrl: './boiler.component.html',
  styleUrl: './boiler.component.css',
})
export class BoilerComponent {}

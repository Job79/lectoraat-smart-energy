import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoilerService } from '../boiler.service';
import { FormsModule } from '@angular/forms';
import { Boiler, EnergyLabels } from '@lectoraat-smart-energy/shared';
import { BoilerResultComponent } from '@lectoraat-smart-energy/ui/components';

@Component({
  selector: 'lectoraat-smart-energy-boiler',
  standalone: true,
  imports: [CommonModule, FormsModule, BoilerResultComponent],
  providers: [BoilerService],
  templateUrl: './boiler.component.html',
  styleUrl: './boiler.component.css',
})
export class BoilerComponent {
  boiler: Boiler = {} as Boiler;
  energyLabels = Object.keys(EnergyLabels);

  constructor(private boilerService: BoilerService) {}

  storeCalculation() {
    this.boilerService.storeCalculation(this.boiler);
    console.log(this.boiler);
  }
}

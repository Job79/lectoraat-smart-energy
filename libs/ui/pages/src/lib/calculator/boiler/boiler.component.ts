import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoilerService } from '../boiler.service';
import { FormsModule } from '@angular/forms';
import {
  Boiler,
  Building,
  EnergyLabelKeys,
} from '@lectoraat-smart-energy/shared';
import { BoilerResultComponent } from '@lectoraat-smart-energy/ui/components';
import { BuildingService } from '../../building/building.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'lectoraat-smart-energy-boiler',
  standalone: true,
  imports: [CommonModule, FormsModule, BoilerResultComponent],
  providers: [BoilerService, BuildingService],
  templateUrl: './boiler.component.html',
  styleUrl: './boiler.component.css',
})
export class BoilerComponent {
  boiler: Boiler = {} as Boiler;
  buildings$!: Observable<Building[]>;
  energyLabels = EnergyLabelKeys;

  constructor(
    private boilerService: BoilerService,
    private buildingServise: BuildingService
  ) {}

  storeCalculation() {
    this.boilerService.storeCalculation(this.boiler);
    console.log(this.boiler);
  }

  ngOnInit(): void {
    this.buildings$ = this.buildingServise.getBuildings();
  }
}

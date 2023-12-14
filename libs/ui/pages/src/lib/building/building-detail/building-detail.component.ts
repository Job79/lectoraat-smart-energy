import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Boiler, Building } from '@lectoraat-smart-energy/shared';
import { Observable } from 'rxjs';
import { BuildingService } from '../building.service';
import { ActivatedRoute } from '@angular/router';
import { BoilerService } from '../../calculator/boiler.service';
import { BoilerResultComponent } from '@lectoraat-smart-energy/ui/components';

@Component({
  selector: 'lectoraat-smart-energy-building-detail',
  standalone: true,
  imports: [CommonModule, BoilerResultComponent],
  providers: [BuildingService, BoilerService],
  templateUrl: './building-detail.component.html',
  styleUrl: './building-detail.component.css',
})
export class BuildingDetailComponent implements OnInit {
  building$!: Observable<Building>;
  boilers$!: Observable<Boiler[]>;

  constructor(
    private buildingService: BuildingService,
    private boilerService: BoilerService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') ?? '';

    this.building$ = this.buildingService.getBuilding(id);
    this.boilers$ = this.boilerService.getBoilers(id);
  }
}

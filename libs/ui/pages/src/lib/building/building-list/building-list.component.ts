import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuildingService } from '../building.service';
import { Building } from '@lectoraat-smart-energy/shared';
import { Observable } from 'rxjs';

@Component({
  selector: 'lectoraat-smart-energy-building-list',
  standalone: true,
  imports: [CommonModule],
  providers: [BuildingService],
  templateUrl: './building-list.component.html',
  styleUrl: './building-list.component.css',
})
export class BuildingListComponent implements OnInit {
  buildings$!: Observable<Building[]>;

  constructor(private buildingService: BuildingService) {}

  ngOnInit(): void {
    this.buildings$ = this.buildingService.getBuildings();
  }
}

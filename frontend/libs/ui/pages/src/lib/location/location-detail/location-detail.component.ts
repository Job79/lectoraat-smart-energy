import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoilerResultComponent } from '@lectoraat-smart-energy/ui/components';
import { LocationService } from '../location.service';
import { BoilerService } from '../../calculator/boiler.service';
import { Boiler, Location } from '@lectoraat-smart-energy/shared';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'lectoraat-smart-energy-location-detail',
  standalone: true,
  imports: [CommonModule, BoilerResultComponent],
  providers: [LocationService, BoilerService],
  templateUrl: './location-detail.component.html',
  styleUrl: './location-detail.component.css',
})
export class LocationDetailComponent implements OnInit {
  location$!: Observable<Location>;
  boilers$!: Observable<Boiler[]>;

  constructor(
    private locationService: LocationService,
    private boilerService: BoilerService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') ?? '';

    this.location$ = this.locationService.getLocation(id);
    this.boilers$ = this.boilerService.getBoilers(id);
  }
}

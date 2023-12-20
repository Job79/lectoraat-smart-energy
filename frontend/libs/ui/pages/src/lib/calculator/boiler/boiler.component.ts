import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoilerService } from '../boiler.service';
import { FormsModule } from '@angular/forms';
import { Boiler, EnergyLabels, Location } from '@lectoraat-smart-energy/shared';
import { BoilerResultComponent } from '@lectoraat-smart-energy/ui/components';
import { Observable } from 'rxjs';
import { LocationService } from '../../location/location.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'lectoraat-smart-energy-boiler',
  standalone: true,
  imports: [CommonModule, FormsModule, BoilerResultComponent],
  providers: [BoilerService, LocationService],
  templateUrl: './boiler.component.html',
  styleUrl: './boiler.component.css',
})
export class BoilerComponent implements OnInit {
  boiler!: Boiler;
  locations$!: Observable<Location[]>;

  energyLabels = Object.keys(EnergyLabels);

  energyLabelColors: { [key: string]: { color: string } } = {
    'a+': { color: 'green' },
    a: { color: '#FFD700' }, //yellow was too light, darkyellow too dark so the hexcode #FFD700 will be used.
    b: { color: 'orange' },
    c: { color: 'red' },
    d: { color: 'purple' },
    e: { color: 'blue' },
    f: { color: 'indigo' },
    g: { color: 'violet' },
  };

  constructor(
    private boilerService: BoilerService,
    private locationService: LocationService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') ?? '';

    if (id) {
      this.boilerService.getBoiler(id).subscribe((boiler) => {
        this.boiler = boiler;
      });
    } else {
      this.boiler = {} as Boiler;
    }

    this.locations$ = this.locationService.getLocations();
  }

  createCalculation() {
    this.boilerService.createCalculation(this.boiler);
    console.log(this.boiler);
  }

  updateCalculation() {
    this.boilerService.updateCalculation(this.boiler);
    console.log(this.boiler);
  }
}

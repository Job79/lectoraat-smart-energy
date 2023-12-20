import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Boiler, EnergyLabels } from '@lectoraat-smart-energy/shared';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { BoilerFormula } from '../boiler.formula';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'lectoraat-smart-energy-boiler-result',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './boiler-result.component.html',
  styleUrl: './boiler-result.component.css',
})
export class BoilerResultComponent implements OnInit {
  @Input()
  boiler: Boiler = {} as Boiler;
  formula?: BoilerFormula;

  constructor() {}

  ngOnInit() {
    this.formula = new BoilerFormula(this.boiler);
  }
}

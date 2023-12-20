import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Boiler, EnergyLabels } from '@lectoraat-smart-energy/shared';
import pdfMake from "pdfmake/build/pdfmake";  
import pdfFonts from "pdfmake/build/vfs_fonts"; 

pdfMake.vfs = pdfFonts.pdfMake.vfs;  

@Component({
  selector: 'lectoraat-smart-energy-boiler-result',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './boiler-result.component.html',
  styleUrl: './boiler-result.component.css',
})
export class BoilerResultComponent {
  @Input()
  boiler: Boiler = {} as Boiler;

  get costHeatingOnce(): number {
    const result =
      this.energyRequiredForHeating && this.boiler.price
        ? (this.energyRequiredForHeating * this.boiler.price) / 100
        : 0;
    return this.roundToDecimals(result);
  }

  get energyRequiredForHeating(): number {
    const result = this.boiler.liter
      ? (this.boiler.liter * 4186 * (70 - 15)) / 3600000
      : 0;
    return this.roundToDecimals(result);
  }

  get timeRequiredForHeating(): number {
    const result =
      this.energyRequiredForHeating && this.boiler.power
        ? this.energyRequiredForHeating / this.boiler.power
        : 0;
    return this.roundToDecimals(result);
  }

  get costStandby(): number {
    if (!this.boiler.energyLabel || !this.boiler.liter) {
      return 0;
    }

    const boilerEnergyLabelValue = EnergyLabels[this.boiler.energyLabel](this.boiler.liter)

    const result = (boilerEnergyLabelValue * 24) / 1000;
    return this.roundToDecimals(result);
  }

  get energyStandbyAnnual(): number {
    const standbyCost = this.costStandby;

    const result = standbyCost !== undefined ? standbyCost * 365 : 0;

    return this.roundToDecimals(result);
  }

  private roundToDecimals(value: number | undefined): number {
    return value !== undefined ? Number(value.toFixed(2)) : 0;
  }

  generatePDF() {  
    let docDefinition = {  
      content: [  
        // Previous configuration  
        {  
          text: 'Boiler berekening',  
          style: 'sectionHeader'  
      },
      {  
          table: {  
              headerRows: 1,  
              widths: ['*', 60],  
              body: [
                [['Aantal liter boiler:'],[this.boiler.liter + ' L']],
                [['Prijs per kWh'],['€ '+ this.boiler.price  / 100]],
                [['Electrisch vermogen boiler:'],[this.boiler.power + ' kiloWatt']],
                [['Energielabel'],[this.boiler.energyLabel]],
              ]
          }
        },
        {  
          table: {  
              headerRows: 1,  
              widths: ['*', 60],  
              body: [
                [['Kosten 1 keer opwarmen:'],['€ ' + this.costHeatingOnce]],
                [['Nodige tijd om water te verwarmen'],[this.timeRequiredForHeating + ' uur']],
                [['Hoeveelheid energie om te verwarmenr:'],[this.energyRequiredForHeating + ' kWh']],
                [['Kosten stilstandverlies per jaar'],['€ ' + this.energyStandbyAnnual]],
                [['Stilstandverlies per dag'],[this.costStandby + ' kWh']]
              ]
          }
        }
      ],
      styles: {  
        sectionHeader: {  
            bold: true,  
            fontSize: 14,  
            margin: 15
        }
      }
    };  
   
    pdfMake.createPdf(docDefinition).open();  
  }  
}

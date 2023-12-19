import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoilerService } from '../boiler.servise';
import { FormsModule } from '@angular/forms';
import { Boiler, EnergyLabels } from '@lectoraat-smart-energy/shared';
import { BoilerResultComponent } from '@lectoraat-smart-energy/ui/components';
import pdfMake from "pdfmake/build/pdfmake";  
import pdfFonts from "pdfmake/build/vfs_fonts";  

pdfMake.vfs = pdfFonts.pdfMake.vfs;  

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
              widths: ['*', '*'],  
              body: [
                [['Aantal liter boiler:'],[this.boiler.liter]],
                [['Prijs per kWh'],[this.boiler.price]],
                [['Electrisch vermogen boiler:'],[this.boiler.power]],
                [['Energielabel'],[this.boiler.energyLabel]]
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

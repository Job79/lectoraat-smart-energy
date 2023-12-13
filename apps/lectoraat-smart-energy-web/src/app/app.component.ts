import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '@lectoraat-smart-energy/ui/layout';
import { BoilerComponent } from '@lectoraat-smart-energy/ui/pages';

@Component({
  standalone: true,
  imports: [RouterModule, LayoutModule, BoilerComponent],
  selector: 'lectoraat-smart-energy-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'lectoraat-smart-energy-web';
}

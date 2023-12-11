import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {LayoutModule} from "@lectoraat-smart-energy/ui/layout";

@Component({
  standalone: true,
  imports: [RouterModule, LayoutModule],
  selector: 'lectoraat-smart-energy-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'lectoraat-smart-energy-web';
}

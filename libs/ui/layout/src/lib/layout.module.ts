import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from "./navbar/navbar.component";
import {RouterLink, RouterLinkActive} from "@angular/router";

@NgModule({
  imports: [CommonModule, RouterLink, RouterLinkActive],
  declarations: [NavbarComponent],
  providers: [],
  exports: [
    NavbarComponent
  ]
})
export class LayoutModule {
}

import {Component} from '@angular/core';

@Component({
  selector: 'lectoraat-smart-energy-navbar',
  templateUrl: './navbar.component.html',
  styles: [],
})
export class NavbarComponent {
  constructor() { }

  logout() {
    console.log('logout')
  }
}

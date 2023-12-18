import { Component } from '@angular/core';

@Component({
  selector: 'lectoraat-smart-energy-navbar',
  templateUrl: './navbar.component.html',
  styles: [],
})
export class NavbarComponent {
  constructor() {}

  logout() {
    console.log('logout');
  }
  imagePath?: string;
  ngOnInit(): void {

    this.imagePath = 'assets/logo-home.svg';
  }
}

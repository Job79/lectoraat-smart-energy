import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'smart-energy-account',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet],
  templateUrl: './account.component.html',
})
export class AccountComponent {}

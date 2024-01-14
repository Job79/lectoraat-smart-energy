import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IconUserComponent } from '../../icons/icon-user/icon-user.component';

@Component({
  selector: 'smart-energy-header',
  standalone: true,
  imports: [CommonModule, RouterModule, IconUserComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Input() title!: string;
  @Input() description!: string;
}

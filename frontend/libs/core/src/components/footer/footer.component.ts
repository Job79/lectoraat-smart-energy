import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IconLinkedinComponent } from '../icons/icon-linkedin/icon-linkedin.component';
import { IconTwitterComponent } from '../icons/icon-twitter/icon-twitter.component';
import { IconInstagramComponent } from '../icons/icon-instagram/icon-instagram.component';
import { IconYoutubeComponent } from '../icons/icon-youtube/icon-youtube.component';

@Component({
  selector: 'smart-energy-footer',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    IconLinkedinComponent,
    IconTwitterComponent,
    IconInstagramComponent,
    IconYoutubeComponent,
  ],
  templateUrl: './footer.component.html',
})
export class FooterComponent {}

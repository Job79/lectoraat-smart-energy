import { Route } from '@angular/router';
import { SettingsNavbarMobileComponent } from './components/settings-navbar-mobile/settings-navbar-mobile.component';

export const settingRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: SettingsNavbarMobileComponent,
  },
  {
    path: '',
    loadComponent: () =>
      import('./pages/settings/settings.component').then((m) => m.SettingsComponent),
    children: [
      {
        path: 'preferences',
        pathMatch: 'full',
        loadComponent: () =>
          import('./pages/preferences/preferences.component').then((m) => m.PreferencesComponent),
      },
      {
        path: 'account',
        pathMatch: 'full',
        loadComponent: () =>
          import('./pages/account/account.component').then((m) => m.AccountComponent),
      },
    ],
  },
];

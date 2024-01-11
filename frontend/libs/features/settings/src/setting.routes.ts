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
        path: 'account',
        pathMatch: 'full',
        loadComponent: () =>
          import('./pages/account/account.component').then((m) => m.AccountComponent),
      },
      {
        path: 'preferences',
        pathMatch: 'full',
        loadComponent: () =>
          import('./pages/preferences/preferences.component').then((m) => m.PreferencesComponent),
      },
      {
        path: 'security',
        pathMatch: 'full',
        loadComponent: () =>
          import('./pages/security/security.component').then((m) => m.SecurityComponent),
      },
      {
        path: 'advanced',
        pathMatch: 'full',
        loadComponent: () =>
          import('./pages/advanced/advanced.component').then((m) => m.AdvancedComponent),
      },
    ],
  },
];

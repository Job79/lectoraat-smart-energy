import { Route } from '@angular/router';

export const settingRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'account',
    pathMatch: 'full',
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

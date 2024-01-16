import { Route } from '@angular/router';
import { SettingsNavbarComponent } from './pages/settings-navbar/settings-navbar.component';

export const settingRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: SettingsNavbarComponent,
  },
  {
    path: '',
    loadComponent: () =>
      import('./pages/settings-outlet/settings-outlet.component').then(
        (m) => m.SettingsOutletComponent,
      ),
    children: [
      {
        path: 'account',
        pathMatch: 'full',
        loadComponent: () =>
          import('./pages/account/account.component').then((m) => m.AccountComponent),
      },
      {
        path: 'theme',
        pathMatch: 'full',
        loadComponent: () => import('./pages/theme/theme.component').then((m) => m.ThemeComponent),
      },
      {
        path: 'security',
        pathMatch: 'full',
        loadComponent: () =>
          import('./pages/security/security.component').then((m) => m.SecurityComponent),
      },
      {
        path: 'info',
        pathMatch: 'full',
        loadComponent: () => import('./pages/info/info.component').then((m) => m.InfoComponent),
      },
    ],
  },
];

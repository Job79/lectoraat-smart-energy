import { Route } from '@angular/router';

export const locationRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'account',
  },
  {
    path: 'account',
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/account/account.component').then((m) => m.AccountComponent),
  },
];

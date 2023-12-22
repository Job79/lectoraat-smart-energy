import { Route } from '@angular/router';

export const locationRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/list/location-list.component').then((m) => m.LocationListComponent),
  },
  {
    path: 'new',
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/edit/location-edit.component').then((m) => m.LocationEditComponent),
  },
  {
    path: ':id',
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/edit/location-edit.component').then((m) => m.LocationEditComponent),
  },
  {
    path: ':id/calculations',
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/detail/location-detail.component').then((m) => m.LocationDetailComponent),
  },
];

import { Route } from '@angular/router';

export const userRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/list/user-list.component').then((m) => m.UserListComponent),
  },
  {
    path: ':id',
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/detail/user-detail.component').then((m) => m.UserDetailComponent),
  },
];

import { Route } from '@angular/router';

export const userRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/list/user-list.component').then((m) => m.UserListComponent),
  },
  {
    path: 'new',
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/edit/user-edit.component').then((m) => m.UserEditComponent),
  },
  {
    path: ':id',
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/edit/user-edit.component').then((m) => m.UserEditComponent),
  },
];

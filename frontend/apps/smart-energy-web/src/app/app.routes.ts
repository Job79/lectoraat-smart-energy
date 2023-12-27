import { Route } from '@angular/router';
import { IsLoggedIn, IsManager, LoginComponent } from '@smart-energy/core';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/calculators',
  },
  {
    path: 'login',
    pathMatch: 'full',
    component: LoginComponent,
  },
  {
    path: 'calculators',
    loadChildren: () => import('@smart-energy/calculators').then((m) => m.calculatorRoutes),
  },
  {
    path: 'locations',
    canActivate: [IsLoggedIn],
    loadChildren: () => import('@smart-energy/locations').then((m) => m.locationRoutes),
  },
  {
    path: 'settings',
    loadChildren: () => import('@smart-energy/settings').then((m) => m.settingRoutes),
  },
  {
    path: 'users',
    canActivate: [IsLoggedIn, IsManager],
    loadChildren: () => import('@smart-energy/users').then((m) => m.userRoutes),
  },
];

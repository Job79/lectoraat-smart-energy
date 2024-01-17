import { Route } from '@angular/router';
import { IsLoggedIn, IsManager, LoginComponent, SetupAccountComponent } from '@smart-energy/core';

const appName = 'Rekentool | ';
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
    title: `${appName}Login`,
  },
  {
    path: 'setup-account',
    component: SetupAccountComponent,
    title: `${appName}Activatie`,
  },
  {
    path: 'calculators',
    loadChildren: () => import('@smart-energy/calculators').then((m) => m.calculatorRoutes),
    title: `${appName}Overzicht`,
  },
  {
    path: 'locations',
    canActivate: [IsLoggedIn],
    loadChildren: () => import('@smart-energy/locations').then((m) => m.locationRoutes),
    title: `${appName}Locaties`,
  },
  {
    path: 'settings',
    canActivate: [IsLoggedIn],
    loadChildren: () => import('@smart-energy/settings').then((m) => m.settingRoutes),
    title: `${appName}Instellingen`,
  },
  {
    path: 'users',
    canActivate: [IsLoggedIn, IsManager],
    loadChildren: () => import('@smart-energy/users').then((m) => m.userRoutes),
    title: `${appName}Gebruikers`,
  },
];

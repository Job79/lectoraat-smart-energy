import { Route } from '@angular/router';
import {
  BoilerComponent,
  CalculatorListComponent,
  LocationDetailComponent,
  LocationListComponent,
  UserListComponent,
} from '@lectoraat-smart-energy/ui/pages';
import { LoginComponent } from '@lectoraat-smart-energy/ui/auth';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'calculator',
  },
  {
    path: 'auth/login',
    pathMatch: 'full',
    component: LoginComponent,
  },
  {
    path: 'location',
    component: LocationListComponent,
  },
  {
    path: 'location/:id',
    component: LocationDetailComponent,
  },
  {
    path: 'user',
    pathMatch: 'full',
    component: UserListComponent,
  },
  {
    path: 'calculator',
    children: [
      {
        path: '',
        component: CalculatorListComponent,
        pathMatch: 'full',
      },
      {
        path: 'boiler',
        component: BoilerComponent,
      },
    ],
  },
];

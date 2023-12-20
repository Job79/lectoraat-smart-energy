import { Route } from '@angular/router';
import {
  BoilerComponent,
  CalculatorListComponent,
  LocationDetailComponent,
  LocationEditComponent,
  LocationListComponent,
  UserEditComponent,
  UserListComponent,
} from '@lectoraat-smart-energy/ui/pages';
import {
  IsAdmin,
  IsLoggedIn,
  LoginComponent,
} from '@lectoraat-smart-energy/ui/auth';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'calculators',
  },
  {
    path: 'auth/login',
    pathMatch: 'full',
    component: LoginComponent,
  },
  {
    path: 'locations',
    children: [
      {
        path: '',
        pathMatch: 'full',
        canActivate: [IsLoggedIn],
        component: LocationListComponent,
      },
      {
        path: 'new',
        canActivate: [IsLoggedIn],
        component: LocationEditComponent,
      },
      {
        path: ':id',
        canActivate: [IsLoggedIn],
        component: LocationDetailComponent,
      },
    ],
  },
  {
    path: 'users',
    children: [
      {
        path: '',
        pathMatch: 'full',
        canActivate: [IsLoggedIn, IsAdmin],
        component: UserListComponent,
      },
      {
        path: 'users/new',
        canActivate: [IsLoggedIn, IsAdmin],
        component: UserEditComponent,
      },
    ],
  },
  {
    path: 'calculators',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: CalculatorListComponent,
      },
      {
        path: 'boiler',
        component: BoilerComponent,
      },
      {
        path: 'boiler/:id',
        component: BoilerComponent,
      },
    ],
  },
];

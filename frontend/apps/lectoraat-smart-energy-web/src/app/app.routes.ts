import { Route } from '@angular/router';
import {
  BoilerComponent,
  CalculatorListComponent,
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

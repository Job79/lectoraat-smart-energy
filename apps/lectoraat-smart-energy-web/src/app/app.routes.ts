import { Route } from '@angular/router';
import { BoilerComponent } from '@lectoraat-smart-energy/ui/pages';
import { LoginComponent } from '@lectoraat-smart-energy/ui/auth';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'calculator/boiler',
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
        path: 'boiler',
        component: BoilerComponent,
      },
    ],
  },
];

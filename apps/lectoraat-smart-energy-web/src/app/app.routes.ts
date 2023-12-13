import { Route } from '@angular/router';
import { BoilerComponent } from '@lectoraat-smart-energy/ui/pages';

export const appRoutes: Route[] = [
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

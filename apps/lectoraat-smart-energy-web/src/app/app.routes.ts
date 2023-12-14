import { Route } from '@angular/router';
import {
  BoilerComponent,
  BuildingDetailComponent,
} from '@lectoraat-smart-energy/ui/pages';
import { BuildingListComponent } from '@lectoraat-smart-energy/ui/pages';

export const appRoutes: Route[] = [
  {
    path: 'building',
    component: BuildingListComponent,
  },
  {
    path: 'building/:id',
    component: BuildingDetailComponent,
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

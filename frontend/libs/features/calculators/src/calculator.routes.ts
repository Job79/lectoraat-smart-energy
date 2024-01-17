import { Route } from '@angular/router';

const appName = 'Rekentool | ';
export const calculatorRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/overview/calculator-overview.component').then(
        (m) => m.CalculatorOverviewComponent,
      ),
  },
  {
    path: 'boiler',
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () =>
          import('./pages/calculators/boiler/boiler.component').then((m) => m.BoilerComponent),
      },
      {
        path: ':id',
        loadComponent: () =>
          import('./pages/calculators/boiler/boiler.component').then((m) => m.BoilerComponent),
      },
    ],
    title: `${appName}Boiler`,
  },
  {
    path: 'single-double-rate',
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () =>
          import('./pages/calculators/single-double-rate/single-double-rate.component').then(
            (m) => m.SingleDoubleRateComponent,
          ),
      },
      {
        path: ':id',
        loadComponent: () =>
          import('./pages/calculators/single-double-rate/single-double-rate.component').then(
            (m) => m.SingleDoubleRateComponent,
          ),
      },
    ],
    title: `${appName}Enkel - of dubbeltarief`,
  },
];

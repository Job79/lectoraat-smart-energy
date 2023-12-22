import { Route } from '@angular/router';

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
    pathMatch: 'full',
    loadComponent: () =>
      import('./calculators/boiler/boiler.component').then((m) => m.BoilerComponent),
  },
  {
    path: 'boiler/:id',
    pathMatch: 'full',
    loadComponent: () =>
      import('./calculators/boiler/boiler.component').then((m) => m.BoilerComponent),
  },
];

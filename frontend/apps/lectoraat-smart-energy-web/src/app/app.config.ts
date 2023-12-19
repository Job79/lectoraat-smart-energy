import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideServiceWorker } from '@angular/service-worker';
import { IPocketBase, environment } from '@lectoraat-smart-energy/shared';
import PocketBase from 'pocketbase';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000',
    }),
    {
      provide: 'pocketbase',
      useValue: new PocketBase(environment.pocketbase) as IPocketBase,
    },
  ],
};

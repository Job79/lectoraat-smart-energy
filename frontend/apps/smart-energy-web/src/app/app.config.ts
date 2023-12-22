import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideServiceWorker } from '@angular/service-worker';
import { AuthService, environment, IPocketBase } from '@smart-energy/core';
import PocketBase from 'pocketbase';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
    }),
    {
      provide: 'pocketbase',
      useValue: new PocketBase(environment.pocketbaseUrl) as IPocketBase,
    },
    AuthService,
  ],
};

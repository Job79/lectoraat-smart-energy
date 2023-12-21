import { inject } from '@angular/core';
import { AuthService } from './auth.service';
import { CanActivateFn, Router } from '@angular/router';

export const IsLoggedIn: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.user$.value.isLoggedIn) {
    return true;
  }

  router.navigate(['/auth/login']);
  return false;
};

export const IsAdmin: CanActivateFn = () => {
  const authService = inject(AuthService);
  return authService.user$.value.isAdmin;
};

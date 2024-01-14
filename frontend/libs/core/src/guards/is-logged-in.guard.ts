import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const IsLoggedIn: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.user$.value.isLoggedIn) {
    if (!authService.user$.value.data?.isActivated) {
      router.navigate(['/settings/account']);
      return false;
    }
    return true;
  }

  router.navigate(['/login']);
  return false;
};

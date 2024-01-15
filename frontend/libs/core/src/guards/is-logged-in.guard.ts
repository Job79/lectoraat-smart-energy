import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const IsLoggedIn: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.user$.value.isLoggedIn || !authService.user$.value.data?.hasSetupAccount) {
    router.navigate(['/login']);
    return false;
  }

  return true;
};

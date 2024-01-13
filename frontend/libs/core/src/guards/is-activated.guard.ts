import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const isActivated: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  console.log(authService.user$.value.data?.isActivated);

  if (authService.user$.value.data?.isActivated) {
    return true; // Allow route activation
  }

  router.navigate(['/settings/account']);
  return false; // Prevent route activation
};

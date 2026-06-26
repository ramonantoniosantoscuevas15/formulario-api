import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Seguridad } from '../../security/seguridad';

export const esAdminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const seguridadServices = inject(Seguridad)
  if(seguridadServices.obtenerRol() === 'admin'){
    return true
  }
  router.navigate(['/Login'])
  return true;
};

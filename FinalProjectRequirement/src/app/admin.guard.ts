// admin.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    // Simulate an admin check (for this example, we just check localStorage)
    const isAdmin = localStorage.getItem('isAdmin');  // Assuming 'isAdmin' is stored as a flag

    if (isAdmin === 'true') {
      return true;
    } else {
      // Redirect to the login page (or a different route)
      this.router.navigate(['/login']);
      return false;
    }
  }
}

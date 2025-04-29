import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  private currentAdmins = 0;
  private maxAdmins = 3;

  constructor(private router: Router) {}

  canActivate(): boolean {
    const isAdmin = true; // replace this with real auth check

    if (isAdmin && this.currentAdmins < this.maxAdmins) {
      this.currentAdmins++;
      return true;
    } else {
      alert('Access denied: Admin limit reached or not authorized');
      this.router.navigate(['/']);
      return false;
    }
  }
}

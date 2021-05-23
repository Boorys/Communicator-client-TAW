import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private router: Router) {
  }

  userId =  localStorage.getItem('userId');

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
console.log(this.userId)
    if (this.userId !== undefined && this.userId !== null) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}

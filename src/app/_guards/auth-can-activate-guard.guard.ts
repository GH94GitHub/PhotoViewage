/*
  todo: Implement this guard properly (Currently allows everything)
  Description:
    This guard will check signed access key to determine if the user is logged in to access
  user content.
*/

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthCanActivateGuardGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(true) {
      return true;
    } else {
      this.router.navigate(["home"]);
      return false;
    }
  }

}

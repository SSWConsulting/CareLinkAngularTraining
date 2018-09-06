import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthenticationService } from './AuthenticationService.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private authSer: AuthenticationService, private router: Router) {}
  canActivate(): Observable<boolean> {
    const sid = this.authSer.getSessionId();
    if (sid) {
      return of(true);
    } else {
      // redirect
      this.router.navigate(['/login']);
      return of(false);
    }
  }
}

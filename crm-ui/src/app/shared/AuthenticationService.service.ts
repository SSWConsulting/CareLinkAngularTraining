import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { CrmGeneratedApiClient } from '../api.generated.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private readonly newProperty = 'sid';

  constructor(private router: Router, private api: CrmGeneratedApiClient) {}

  authenticateUser(user: string, password: string): Observable<boolean> {
    return this.api
      .tokens_Post({
        userName: user,
        pasword: password
      })
      .pipe(
        tap(x => {
          this.setSessionId(x);
        }),
        map(u => {
          if (u) {
            return true;
          } else {
            return false;
          }
        })
      );
  }

  private setSessionId(token: string) {
    sessionStorage.setItem(this.newProperty, token);
  }
  getSessionId(): string {
    return sessionStorage.getItem(this.newProperty);
  }
  logout() {
    sessionStorage.removeItem(this.newProperty);
    this.router.navigate(['/login']);
  }
}

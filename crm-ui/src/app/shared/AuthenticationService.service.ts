import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private readonly newProperty = 'sid';

  constructor(private router: Router) {}

  authenticateUser(user: string, password: string): Observable<string> {
    // call the API to login and return the sessionID as observable
  }

  setSessionId(token: string) {
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

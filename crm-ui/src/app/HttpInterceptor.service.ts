import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from './shared/AuthenticationService.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthenticationService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const sessionId = this.authService.getSessionId();
    if (sessionId) {
      const request = req.clone({ headers: req.headers.set('SessionId', sessionId) });
      return next.handle(request);
    } else {
      return next.handle(req);
    }
  }
}

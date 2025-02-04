import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const user = this.authService.userSignal();
    const isApiUrl = req.url.startsWith(this.authService.authServerPath);

    if (user && user.jwtToken && isApiUrl) {
      console.log('usertoken11111: ', user.jwtToken);
      req = req.clone({
        setHeaders: { Authorization: `${user.jwtToken}` },
      });
    }

    return next.handle(req);
  }
}

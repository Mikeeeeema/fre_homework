import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  GuardResult,
  MaybeAsync,
  RouterStateSnapshot,
} from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { signal } from '@angular/core';
import { AppUserAuth } from '../interfaces/user-auth.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthDto } from '../interfaces/auth-dto.interface';
import { UserRole } from '../interfaces/user-auth.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // private appUserRegister = new AppUserRegister();

  // private isBrowser!: boolean;

  private jwtHelper = new JwtHelperService();
  userSignal = signal<AppUserAuth>({});

  private isRegister = false;
  private userName!: string;
  private userInfo!: any;
  public authServerPath = 'http://localhost:5566/api/v1'; // 改为 public

  constructor(private http: HttpClient, private router: Router) {}

  register(token: string) {
    this.isRegister = true;
    this.userInfo = this.jwtHelper.decodeToken(token);
    this.userSignal.set({
      ...this.userInfo,
      jwtToken: token,
    });
  }

  unregister() {
    this.isRegister = false;
    this.userInfo = null;
    this.userSignal.set({});
  }

  getUserInfo(): any {
    return this.userInfo;
  }

  isAuthenticated(): boolean {
    // 检查用户是否已登录
    return !!this.userSignal().jwtToken;
  }

  getUsername(): string | null {
    return this.userInfo ? this.userInfo.username : null;
  }

  upgradePermission(userRole: { role: UserRole }): Observable<AuthDto> {
    if (typeof window === 'undefined') {
      console.error('localStorage is not available');
      return throwError('localStorage is not available');
    }

    const token = localStorage.getItem('token');
    console.log('token is ', token);
    if (!token) {
      return throwError('No token found');
    }

    const headers = { Authorization: `${token}` };

    return this.http
      .patch<AuthDto>(`${this.authServerPath}/auth/userupdate`, userRole)
      .pipe(
        tap(({ accessToken, role }: AuthDto) => {
          this.setUserValueByToken({ accessToken, role });
          this.router.navigate(['/movies']);
        }),
        catchError((error) => {
          console.error('Error during role update:', error);
          return throwError('Something went wrong during role update!');
        })
      );
  }

  private setUserValueByToken({
    accessToken,
    role,
  }: {
    accessToken: string;
    role: UserRole;
  }) {
    localStorage.setItem('access_token', accessToken);

    const { id, username, email, exp } =
      this.jwtHelper.decodeToken(accessToken);

    const user = {
      ...{ id, username, email, role },
      jwtToken: accessToken,
    };
    this.userSignal.set(user);
    this.startRefreshTokenTimer(exp);
  }

  private startRefreshTokenTimer(exp: number) {
    const expires = new Date(exp * 1000);
    const timeout = expires.getTime() - Date.now() - 60000; // 提前一分钟刷新

    setTimeout(() => {
      this.refreshToken().subscribe();
    }, timeout);
  }

  private refreshToken(): Observable<AuthDto> {
    const token = localStorage.getItem('access_token');
    if (!token) {
      return throwError('No token found');
    }

    return this.http
      .get<AuthDto>(`${this.authServerPath}/auth/refresh-token`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .pipe(
        tap(({ accessToken, role }: AuthDto) => {
          this.setUserValueByToken({ accessToken, role });
        })
      );
  }
}

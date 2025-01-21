import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  GuardResult,
  MaybeAsync,
  RouterStateSnapshot,
} from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // private appUserRegister = new AppUserRegister();

  // private isBrowser!: boolean;

  private isRegister = false;
  private userName!: string;
  private jtwHelper = new JwtHelperService();
  private userInfo!: any;

  register(token: string) {
    this.isRegister = true;
    this.userInfo = this.jtwHelper.decodeToken(token);
  }

  unregister() {
    this.isRegister = false;
    this.userInfo = null;
  }

  getUserInfo(): any {
    return this.userInfo;
  }

  isAuthenticated() {
    return this.isRegister;
  }

  getUsername(): string | null {
    return this.userInfo ? this.userInfo.username : null;
  }
}

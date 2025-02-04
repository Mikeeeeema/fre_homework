import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { RegisterService } from '../register.service';
import { UserRole } from '../enum/user-role.enum';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(
    private registerService: RegisterService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const userRole = localStorage.getItem('role');
    console.log(userRole);

    if (userRole === UserRole.SUPERUSER || userRole === UserRole.ADMIN) {
      return true; // 允许访问
    } else {
      this.router.navigate(['/register/3']); // 重定向到 register3 页面
      return false; // 拒绝访问
    }
  }
}

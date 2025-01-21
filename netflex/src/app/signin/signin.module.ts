import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SignInPageComponent } from '../components/sign-in-page/sign-in-page.component';
import { UserHomePageComponent } from '../components/user-home-page/user-home-page.component';
import { SharedModule } from '../shared/shared.module';
import { AuthGuard } from '../services/auth/auth.guard';
// import { MoivelistComponent } from '../components/moivelist/moivelist.component';
// import { MoiveitemComponent } from '../components/moiveitem/moiveitem.component';

const routes: Routes = [
  {
    path: '',
    component: SignInPageComponent,
  },
  {
    path: 'userHome',
    component: UserHomePageComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  declarations: [
    SignInPageComponent,
    UserHomePageComponent,
    // MoivelistComponent,
    // MoiveitemComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
  exports: [SignInPageComponent, UserHomePageComponent],
})
export class SignInModule {}

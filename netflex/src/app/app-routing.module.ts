import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInPageComponent } from './components/sign-in-page/sign-in-page.component';
import { Register1Component } from './components/register1/register1.component';
import { Register2Component } from './components/register2/register2.component';
import { Register3Component } from './components/register3/register3.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { DetailModule } from './detail/detail.module';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomepageComponent,
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'signin',
    // component: SignInPageComponent,
    loadChildren: () =>
      import('./signin/signin.module').then((m) => m.SignInModule),
  },
  {
    path: 'register',
    // children: [
    //   { path: '', redirectTo: 'register1', pathMatch: 'full' },
    //   { path: '1', component: Register1Component },
    //   { path: '2', component: Register2Component },
    //   { path: '3', component: Register3Component },
    // ],
    loadChildren: () =>
      import('./register/register.module').then((m) => m.RegisterModule),
  },
  {
    path: 'detail/:id',
    loadChildren: () =>
      import('./detail/detail.module').then((m) => m.DetailModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

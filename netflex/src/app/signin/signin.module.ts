import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SignInPageComponent } from '../components/sign-in-page/sign-in-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SignInPageComponent,
  },
];

@NgModule({
  declarations: [SignInPageComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(routes)],
  exports: [SignInPageComponent],
})
export class SignInModule {}

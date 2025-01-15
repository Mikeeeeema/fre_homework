import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Register1Component } from '../components/register1/register1.component';
import { Register2Component } from '../components/register2/register2.component';
import { Register3Component } from '../components/register3/register3.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module'; // 导入 SharedModule

const routes: Routes = [
  { path: '', redirectTo: '1', pathMatch: 'full' },
  { path: '1', component: Register1Component },
  { path: '2', component: Register2Component },
  { path: '3', component: Register3Component },
];

@NgModule({
  declarations: [Register1Component, Register2Component, Register3Component],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
  exports: [Register1Component, Register2Component, Register3Component],
})
export class RegisterModule {}

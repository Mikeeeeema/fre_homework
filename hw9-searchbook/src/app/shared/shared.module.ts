import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscriptionManagePipe } from './discription-manage.pipe';
import { MatButtonModule } from '@angular/material/button';

//网上的module比如button可以放在shared module里面这样看起来更整洁
@NgModule({
  declarations: [DiscriptionManagePipe],
  exports: [DiscriptionManagePipe, MatButtonModule],
  imports: [CommonModule],
})
export class SharedModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { MoiveitemComponent } from '../components/moiveitem/moiveitem.component';
import { MoivelistComponent } from '../components/moivelist/moivelist.component';
import { DotPipe } from '../components/moiveitem/dot.pipe';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

//要export
@NgModule({
  declarations: [
    NavbarComponent,
    MoiveitemComponent,
    MoivelistComponent,
    DotPipe,
    MainHeaderComponent,
    MainFooterComponent,
  ],
  imports: [CommonModule, RouterModule, MatButtonModule, InfiniteScrollModule],
  exports: [
    NavbarComponent,
    MoiveitemComponent,
    MoivelistComponent,
    DotPipe,
    MainHeaderComponent,
    MainFooterComponent,
  ],
})
export class SharedModule {}

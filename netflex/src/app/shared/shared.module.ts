import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { MoiveitemComponent } from '../components/moiveitem/moiveitem.component';
import { MoivelistComponent } from '../components/moivelist/moivelist.component';
import { DotPipe } from '../components/moiveitem/dot.pipe';

@NgModule({
  declarations: [
    NavbarComponent,
    MoiveitemComponent,
    MoivelistComponent,
    DotPipe,
  ],
  imports: [CommonModule],
  exports: [NavbarComponent, MoiveitemComponent, MoivelistComponent, DotPipe],
})
export class SharedModule {}

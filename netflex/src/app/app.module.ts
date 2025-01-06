import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MoiveitemComponent } from './components/moiveitem/moiveitem.component';
import { MoivelistComponent } from './components/moivelist/moivelist.component';
import { DotPipe } from './components/moiveitem/dot.pipe';

@NgModule({
  declarations: [AppComponent, MoiveitemComponent, MoivelistComponent, DotPipe],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [provideClientHydration(withEventReplay())],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { MoiveitemComponent } from './components/moiveitem/moiveitem.component';
// import { MoivelistComponent } from './components/moivelist/moivelist.component';
// import { DotPipe } from './components/moiveitem/dot.pipe';
// import { NavbarComponent } from './components/navbar/navbar.component';
// import { SignInPageComponent } from './components/sign-in-page/sign-in-page.component';
import { ReactiveFormsModule } from '@angular/forms';
// import { Register1Component } from './components/register1/register1.component';
// import { Register2Component } from './components/register2/register2.component';
// import { Register3Component } from './components/register3/register3.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
// import { MainRowOneComponent } from './components/homepage/components/main-row-one/main-row-one.component';
// import { MainRowTwoComponent } from './components/homepage/components/main-row-two/main-row-two.component';
// import { MainRowThreeComponent } from './components/homepage/components/main-row-three/main-row-three.component';
// import { MainQuestionComponent } from './components/homepage/components/main-question/main-question.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
// import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
// import { HomepageComponent } from './components/homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    // MainRowOneComponent,
    // MainRowTwoComponent,
    // MainRowThreeComponent,
    // MainQuestionComponent,
    // MovieDetailComponent,
    // MoiveitemComponent,
    // MoivelistComponent,
    // DotPipe,
    // NavbarComponent,
    // SignInPageComponent,
    // Register1Component,
    // Register2Component,
    // Register3Component,
    // HomepageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CoreModule,
    SharedModule,
    HomeModule,
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

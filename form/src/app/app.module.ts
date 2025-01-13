import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { Hw10Component } from './hw10/hw10.component';
import { ValidatorsComponent } from './validators/validators.component';
import { HttpClientModule } from '@angular/common/http';
import { SelectallComponent } from './selectall/selectall.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveComponent,
    TemplateDrivenComponent,
    Hw10Component,
    ValidatorsComponent,
    SelectallComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [provideClientHydration(withEventReplay())],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TodoService } from './services/todo.service';
import { ChangeTitleComponent } from './change-title/change-title.component';
import { ChangeTitleCardComponent } from './change-title-card/change-title-card.component';
import { Hw6ChangeTitleComponent } from './hw6-change-title/hw6-change-title.component';
import { Hw6ChangeTitleCardComponent } from './hw6-change-title-card/hw6-change-title-card.component';
import { TodoPipePipe } from './todo/todo-pipe.pipe';
import { Hw7ChangeTitleComponent } from './hw7-change-title/hw7-change-title.component';
import { AdddotPipe } from './hw7-change-title/adddot.pipe';

@NgModule({
  declarations: [AppComponent, TodoComponent, TodoItemComponent, ChangeTitleComponent, ChangeTitleCardComponent, Hw6ChangeTitleComponent, Hw6ChangeTitleCardComponent, TodoPipePipe, Hw7ChangeTitleComponent, AdddotPipe],
  //formsmodule is the two way binding
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [provideClientHydration(withEventReplay()), TodoService],
  bootstrap: [AppComponent],
})
export class AppModule {}

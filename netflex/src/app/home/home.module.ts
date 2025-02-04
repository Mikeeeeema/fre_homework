import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MainRowOneComponent } from '../components/homepage/components/main-row-one/main-row-one.component';
import { HomepageComponent } from '../components/homepage/homepage.component';
import { SharedModule } from '../shared/shared.module';
import { MainRowTwoComponent } from '../components/homepage/components/main-row-two/main-row-two.component';
import { MainRowThreeComponent } from '../components/homepage/components/main-row-three/main-row-three.component';
import { MainQuestionComponent } from '../components/homepage/components/main-question/main-question.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    HomepageComponent,
    MainRowOneComponent,
    MainRowTwoComponent,
    MainRowThreeComponent,
    MainQuestionComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    InfiniteScrollModule,
  ],
  exports: [
    HomepageComponent,
    MainRowOneComponent,
    MainRowTwoComponent,
    MainRowThreeComponent,
    MainQuestionComponent,
  ],
})
export class HomeModule {}

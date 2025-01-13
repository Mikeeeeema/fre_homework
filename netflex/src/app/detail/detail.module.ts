import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailComponent } from '../components/movie-detail/movie-detail.component';
import { YouTubePlayerModule } from '@angular/youtube-player';

const routes: Routes = [
  {
    path: '',
    component: MovieDetailComponent,
  },
];

@NgModule({
  declarations: [MovieDetailComponent],
  imports: [CommonModule, RouterModule.forChild(routes), YouTubePlayerModule],
})
export class DetailModule {}

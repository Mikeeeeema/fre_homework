import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailComponent } from '../components/movie-detail/movie-detail.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { MovieDetailResolver } from '../services/resolver/movie-detail.resolver';

const routes: Routes = [
  {
    path: '',
    component: MovieDetailComponent,
    resolve: {
      movieDetail: MovieDetailResolver,
    },
  },
];

@NgModule({
  declarations: [MovieDetailComponent],
  imports: [CommonModule, RouterModule.forChild(routes), YouTubePlayerModule],
})
export class DetailModule {}

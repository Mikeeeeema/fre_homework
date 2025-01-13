import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoiveService } from '../../services/moive.service';
import { parseArgs } from 'util';
import {
  MoiveDetailRes,
  ResultsEntity,
  VideoRes,
  ResultsEntity1,
} from '../../services/interfaces/moive.interface';

@Component({
  selector: 'app-movie-detail',
  standalone: false,

  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.scss',
})
export class MovieDetailComponent implements OnInit {
  movieId!: string;
  movieDetail!: MoiveDetailRes;
  showVideo: boolean = false;
  videoKey: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private movieService: MoiveService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.movieId = params['id'];
      this.loadMoiveDetail();
      this.loadVideo();
    });
  }

  navigateBack() {
    this.router.navigate(['']);
  }

  private loadMoiveDetail() {
    this.movieService.getMoiveDetail(this.movieId).subscribe((data) => {
      this.movieDetail = data;
      console.log(this.movieDetail);
    });
  }

  loadVideo() {
    this.movieService.getMoiveVideos(this.movieId).subscribe((data) => {
      if (data.results && data.results.length > 0) {
        const firstVideo = data.results[0];
        this.videoKey = firstVideo.key;
      } else {
        this.videoKey = null;
      }
    });
  }
}

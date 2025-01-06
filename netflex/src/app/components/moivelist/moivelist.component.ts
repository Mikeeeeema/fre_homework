import { Component, OnDestroy, OnInit } from '@angular/core';
import { MoiveService } from '../../services/moive.service';
import { Subscription } from 'rxjs';
import { ResultsEntity } from '../../services/interfaces/moive.interface';

@Component({
  selector: 'app-moivelist',
  standalone: false,

  templateUrl: './moivelist.component.html',
  styleUrl: './moivelist.component.scss',
})
export class MoivelistComponent implements OnInit, OnDestroy {
  moviesub = new Subscription();
  movies: ResultsEntity[] = [];

  constructor(private moiveServive: MoiveService) {}

  ngOnInit(): void {
    // this.moiveServive.getMoive().subscribe();
    // this.moviesub = this.moiveServive.moiveSubject$.subscribe(
    //   (val: ResultsEntity[]) => {
    //     console.log('moivelist: ', val);
    //     console.log('num: ', val.length);
    //     this.movies = val;
    //   }
    // );

    this.moiveServive
      .getMultiplePage([1, 2])
      .subscribe((data: ResultsEntity[]) => {
        this.movies = data;
      });
  }
  ngOnDestroy(): void {
    this.moviesub.unsubscribe();
  }
}

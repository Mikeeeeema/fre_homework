// import { Component, OnDestroy, OnInit } from '@angular/core';
// import { MoiveService } from '../../services/moive.service';
// import { Subscription } from 'rxjs';
// import { ResultsEntity } from '../../services/interfaces/moive.interface';

// @Component({
//   selector: 'app-moivelist',
//   standalone: false,

//   templateUrl: './moivelist.component.html',
//   styleUrl: './moivelist.component.scss',
// })
// export class MoivelistComponent implements OnInit, OnDestroy {
//   moviesub = new Subscription();
//   movies: ResultsEntity[] = [];

//   constructor(private moiveServive: MoiveService) {}

//   ngOnInit(): void {
//     // this.moiveServive.getMoive().subscribe();
//     // this.moviesub = this.moiveServive.moiveSubject$.subscribe(
//     //   (val: ResultsEntity[]) => {
//     //     console.log('moivelist: ', val);
//     //     console.log('num: ', val.length);
//     //     this.movies = val;
//     //   }
//     // );

//     this.moiveServive
//       .getMultiplePage([1, 2])
//       .subscribe((data: ResultsEntity[]) => {
//         this.movies = data;
//       });
//   }
//   ngOnDestroy(): void {
//     this.moviesub.unsubscribe();
//   }
// }
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MoiveService } from '../../services/moive.service';
import { Subscription } from 'rxjs';
import { ResultsEntity } from '../../services/interfaces/moive.interface';

@Component({
  selector: 'app-moivelist',
  standalone: false,
  templateUrl: './moivelist.component.html',
  styleUrls: ['./moivelist.component.scss'],
})
export class MoivelistComponent implements OnInit, OnDestroy {
  movies: ResultsEntity[] = [];
  currentPage: number = 1; // 当前页数
  loading: boolean = false; // 加载状态
  private subscriptions: Subscription[] = []; // 统一管理所有订阅

  constructor(private moiveService: MoiveService) {}

  ngOnInit(): void {
    this.loadMovies(this.currentPage);
  }

  loadMovies(page: number): void {
    if (this.loading) return; // 防止重复请求
    this.loading = true;

    const sub = this.moiveService
      .getMultiplePage([page])
      .subscribe((data: ResultsEntity[]) => {
        this.movies = [...this.movies, ...data]; // 合并新数据
        this.currentPage++; // 增加页数
        this.loading = false; // 重置加载状态
      });

    this.subscriptions.push(sub);
  }

  onScroll(): void {
    if (this.loading) return; // 防止重复请求
    this.loading = true;

    this.moiveService.getMultiplePage([this.currentPage]).subscribe(
      (data: ResultsEntity[]) => {
        this.movies = [...this.movies, ...data]; // 合并新数据
        this.currentPage++; // 增加页数
        this.loading = false; // 重置加载状态
      },
      (error) => {
        console.error('加载更多电影数据失败', error);
        this.loading = false;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}

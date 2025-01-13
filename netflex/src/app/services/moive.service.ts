import { Injectable } from '@angular/core';
import { BehaviorSubject, forkJoin, map, Observable, tap } from 'rxjs';
import {
  MoiveDetailRes,
  moiveRes,
  ResultsEntity,
  VideoRes,
  ResultsEntity1,
} from './interfaces/moive.interface';
import { HttpClient } from '@angular/common/http';
import { get } from 'http';

@Injectable({
  providedIn: 'root',
})
export class MoiveService {
  private baseUrl =
    'https://api.themoviedb.org/3/movie/popular?api_key=b71ff76be31ab6ee4f4ee71ee9e95984';
  private apiKey = '?api_key=b71ff76be31ab6ee4f4ee71ee9e95984';
  private startUrl = 'https://api.themoviedb.org/3';

  moiveSubject$ = new BehaviorSubject<ResultsEntity[]>([]);
  constructor(private http: HttpClient) {}

  // &page=2

  getMoive(page: number) {
    return this.http.get<moiveRes>(`${this.baseUrl}&page=${page}`).pipe(
      map((val: moiveRes) => {
        return val.results;
      })
      // tap((val: ResultsEntity[]) => {
      //   this.moiveSubject$.next(val);
      // })
    );
  }

  getMultiplePage(pages: number[]) {
    const requests = pages.map((page) => this.getMoive(page));
    return forkJoin(requests).pipe(
      map((results) => results.flat()),
      tap((val: ResultsEntity[]) => {
        this.moiveSubject$.next(val);
      })
    );
  }

  getMoiveDetail(movieId: string): Observable<MoiveDetailRes> {
    return this.http.get<MoiveDetailRes>(
      `${this.startUrl}/movie/${movieId}${this.apiKey}`
    );
  }

  //？？？

  getMoiveVideos(movieId: string): Observable<VideoRes> {
    return this.http.get<VideoRes>(
      `${this.startUrl}/movie/${movieId}/videos${this.apiKey}`
    );
  }
}

// https://api.themoviedb.org/3/movie/1022789/videos?api_key=b71ff76be31ab6ee4f4ee71ee9e95984

// https://www.youtube.com/watch?v=

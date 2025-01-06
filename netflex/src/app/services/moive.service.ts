import { Injectable } from '@angular/core';
import { BehaviorSubject, forkJoin, map, tap } from 'rxjs';
import { moiveRes, ResultsEntity } from './interfaces/moive.interface';
import { HttpClient } from '@angular/common/http';
import { get } from 'http';

@Injectable({
  providedIn: 'root',
})
export class MoiveService {
  private baseUrl =
    'https://api.themoviedb.org/3/movie/popular?api_key=b71ff76be31ab6ee4f4ee71ee9e95984';
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
}

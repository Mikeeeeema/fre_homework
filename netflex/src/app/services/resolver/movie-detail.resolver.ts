import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { MoiveService } from '../moive.service';
import { MoiveDetailRes } from '../interfaces/moive.interface';

@Injectable({
  providedIn: 'root',
})
export class MovieDetailResolver implements Resolve<MoiveDetailRes> {
  constructor(private movieService: MoiveService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<MoiveDetailRes> {
    const movieId = route.paramMap.get('id')!;
    return this.movieService.getMoiveDetail(movieId);
  }
}

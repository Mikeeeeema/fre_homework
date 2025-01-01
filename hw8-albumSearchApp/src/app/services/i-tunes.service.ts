import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  AlbumRes,
  ExpectAlbum,
  ResultsEntity,
} from './interfaces/album.interface';
import { BehaviorSubject, map, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ITunesService {
  // Url =
  //   'https://itunes.apple.com/search?term=${ARTIST_NAME}&media=music&entity=album&attribute=artistTerm&limit=200';
  baseUrl = 'https://itunes.apple.com/search';

  albumSubject$ = new Subject<ExpectAlbum[]>();
  artistNameSubject$ = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) {}

  getAlbums(artistName: string) {
    const url = `${this.baseUrl}?term=${artistName}&media=music&entity=album&attribute=artistTerm&limit=200`;
    return this.http.get<AlbumRes>(url).pipe(
      map((val: AlbumRes) => {
        return val.results?.map((albumn: ResultsEntity) => {
          return {
            albumName: albumn.collectionName,
            albumPic: albumn.artworkUrl100,
          } as ExpectAlbum;
        });
      }),
      tap((val: ExpectAlbum[]) => {
        this.albumSubject$.next(val);
      })
    );
  }

  setArtistName(artistName: string) {
    this.artistNameSubject$.next(artistName);
  }
}

interface result {}

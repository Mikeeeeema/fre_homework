import { Component, OnDestroy, OnInit } from '@angular/core';
import { ITunesService } from '../../services/i-tunes.service';
import { Subscription } from 'rxjs';
import { ExpectAlbum } from '../../services/interfaces/album.interface';

@Component({
  selector: 'app-albumslist',
  standalone: false,

  templateUrl: './albumslist.component.html',
  styleUrl: './albumslist.component.css',
})
export class AlbumslistComponent implements OnInit, OnDestroy {
  albumsub = new Subscription();
  artistNameSub = new Subscription();
  albums: ExpectAlbum[] = [];
  artist: string = '';
  resultNum: number = 0;

  constructor(private iTunesService: ITunesService) {}

  ngOnInit(): void {
    this.albumsub = this.iTunesService.albumSubject$.subscribe(
      (val: ExpectAlbum[]) => {
        console.log('albumlist: ', val);
        this.albums = val;
        this.resultNum = this.albums.length;
        console.log(this.resultNum);
      }
    );

    this.artistNameSub = this.iTunesService.artistNameSubject$.subscribe(
      (artistName: string) => {
        this.artist = artistName;
      }
    );
  }

  ngOnDestroy(): void {
    this.albumsub.unsubscribe();
    this.artistNameSub.unsubscribe();
  }
}

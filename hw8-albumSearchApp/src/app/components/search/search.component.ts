import { Component } from '@angular/core';
import { ITunesService } from '../../services/i-tunes.service';

@Component({
  selector: 'app-search',
  standalone: false,

  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  artistName = '';

  constructor(private iTunesService: ITunesService) {}

  consoleInput() {
    this.iTunesService.setArtistName(this.artistName);
    this.iTunesService.getAlbums(this.artistName).subscribe((val) => {
      // console.log('searchcomponent: ', val);
    });
    console.log(this.artistName);
  }
}

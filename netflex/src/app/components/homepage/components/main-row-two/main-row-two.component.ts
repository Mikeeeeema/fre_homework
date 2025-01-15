import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-row-two',
  standalone: false,
  templateUrl: './main-row-two.component.html',
  styleUrl: './main-row-two.component.scss',
})
export class MainRowTwoComponent {
  @Input() type: 'tv' | 'device' = 'tv';
  @Input() headerText = 'Enjoy on your TV';
  @Input() contentText =
    'Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.';

  templatePic(): string {
    return this.type;
  }

  header(): string {
    return this.headerText;
  }

  content(): string {
    return this.contentText;
  }
}

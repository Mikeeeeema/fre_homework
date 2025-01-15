import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-row-three',
  standalone: false,

  templateUrl: './main-row-three.component.html',
  styleUrl: './main-row-three.component.scss',
})
export class MainRowThreeComponent {
  @Input() header = '';
  @Input() content = '';
  @Input() channel: 'download' | 'kid' = 'download';

  getHeader(): string {
    return this.header;
  }

  getContent(): string {
    return this.content;
  }

  getChannel(): string {
    return this.channel;
  }
}

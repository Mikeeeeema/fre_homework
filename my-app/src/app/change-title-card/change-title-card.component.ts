import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Card } from '../change-title/change-title.component';

@Component({
  selector: 'app-change-title-card',
  standalone: false,

  templateUrl: './change-title-card.component.html',
  styleUrl: './change-title-card.component.css',
})
export class ChangeTitleCardComponent {
  @Input() card!: Card;
  @Output() btncolor = new EventEmitter();
  handleClick() {
    this.btncolor.emit(this.card.btncolor);
  }
}

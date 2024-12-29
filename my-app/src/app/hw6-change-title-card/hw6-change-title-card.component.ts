import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Card } from '../hw6-change-title/hw6-change-title.component';

@Component({
  selector: 'app-hw6-change-title-card',
  standalone: false,

  templateUrl: './hw6-change-title-card.component.html',
  styleUrl: './hw6-change-title-card.component.css',
})
export class Hw6ChangeTitleCardComponent {
  @Input() card!: Card;
  @Output() btncolor = new EventEmitter();
  handleClick() {
    this.btncolor.emit(this.card.btncolor);
  }
}

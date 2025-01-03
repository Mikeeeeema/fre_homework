import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { expectBook } from '../../services/interfaces/book.interface';
import { BookService } from '../../services/book.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bookitem',
  standalone: false,

  templateUrl: './bookitem.component.html',
  styleUrl: './bookitem.component.scss',
})
export class BookitemComponent {
  @Input() books: expectBook[] = [];
  @Output() addToWishList = new EventEmitter<expectBook>();

  onAddToWishList(book: expectBook) {
    this.addToWishList.emit(book);
  }
}

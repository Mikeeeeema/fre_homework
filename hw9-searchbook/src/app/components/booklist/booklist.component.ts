import { Component, OnDestroy, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Subscription } from 'rxjs';
import { expectBook } from '../../services/interfaces/book.interface';

@Component({
  selector: 'app-booklist',
  standalone: false,

  templateUrl: './booklist.component.html',
  styleUrl: './booklist.component.scss',
})
export class BooklistComponent implements OnInit, OnDestroy {
  booksub = new Subscription();
  books: expectBook[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.booksub = this.bookService.bookSubject$.subscribe(
      (val: expectBook[]) => {
        console.log('booklist:', val);
        this.books = val;
      }
    );
  }
  ngOnDestroy(): void {
    this.booksub.unsubscribe();
  }

  addToWishList(book: expectBook) {
    this.bookService.addToWishList(book);
  }
}

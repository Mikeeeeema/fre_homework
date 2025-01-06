import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { expectBook } from '../../services/interfaces/book.interface';

@Component({
  selector: 'app-wishlist',
  standalone: false,

  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss',
})
export class WishlistComponent implements OnInit {
  wishList: any = [];
  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.wishListSubject$.subscribe((wishlist) => {
      this.wishList = wishlist;
    });
  }

  removeFromWishList(bookName: string) {
    this.bookService.removeFromWishList(bookName);
  }
}

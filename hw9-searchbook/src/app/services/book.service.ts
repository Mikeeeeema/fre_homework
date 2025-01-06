import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { bookRes, expectBook, ItemsEntity } from './interfaces/book.interface';
import { BehaviorSubject, map, of, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private baseUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
  bookSubject$ = new BehaviorSubject<expectBook[]>([]);
  // private wishList: string[] = [];

  private wishlist$ = new BehaviorSubject<string[]>([]);
  wishListSubject$ = this.wishlist$.asObservable();

  constructor(private http: HttpClient) {}

  getBooks(name: string) {
    if (!name) {
      return of([]);
    }
    return this.http.get<bookRes>(this.baseUrl + name).pipe(
      map((val: bookRes) => {
        return val.items?.map(({ volumeInfo: info }: ItemsEntity) => {
          return {
            bookPic: info.imageLinks.thumbnail,
            bookName: info.title,
            publisher: info.publisher,
            publishDate: info.publishedDate,
            description: info.description,
          } as expectBook;
        });
      }),
      tap((val: expectBook[]) => {
        this.bookSubject$.next(val);
      })
    );
  }

  addToWishList(book: expectBook) {
    if (!this.wishlist$.value.includes(book.bookName)) {
      // this.wishList = [book.bookName, ...this.wishList];
      this.wishlist$.next([book.bookName, ...this.wishlist$.value]);
    }
  }

  removeFromWishList(bookName: string) {
    // console.log('Before removal:', this.wishList);
    if (this.wishlist$.getValue().includes(bookName)) {
      const updatedWishlist = this.wishlist$
        .getValue()
        .filter((name) => name !== bookName);
      this.wishlist$.next(updatedWishlist);
      // console.log('After removal:', this.wishList);
    }
  }
}

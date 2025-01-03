import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { bookRes, expectBook, ItemsEntity } from './interfaces/book.interface';
import { BehaviorSubject, map, of, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private books: expectBook[] = [
    {
      bookName: 'JAVA Programming',
      bookPic:
        'http://books.google.com/books/content?id=rkI8BAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
      publisher: 'Pearson Education India',
      publishDate: '2013',
      description:
        'JAVA Programming introduces the subject in a simple and lucid style. This book explains programming concepts and software development practices for solving problems in a clear and precise manner.',
    },
    {
      bookName: 'Java For Dummies',
      bookPic:
        'http://books.google.com/books/content?id=x8BvqSRbR3cC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
      publisher: 'John Wiley & Sons',
      publishDate: '2011-03-03',
      description:
        'Start building powerful programs with Java 6—fast! Get an overview of Java 6 and begin building your own programs.',
    },
    {
      bookName: 'Fundamentals of Java Programming',
      bookPic:
        'http://books.google.com/books/content?id=mgFkDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
      publisher: 'Springer',
      publishDate: '2018-07-13',
      description:
        'Making extensive use of examples, this textbook on Java programming teaches the fundamental skills for getting started in a command-line environment.',
    },
    {
      bookName: 'Functional Programming in Java',
      bookPic:
        'http://books.google.com/books/content?id=_g5QDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
      publisher: 'Pragmatic Bookshelf',
      publishDate: '2014-02-19',
      description:
        'Intermediate level, for programmers fairly familiar with Java, but new to the functional style of programming and lambda expressions.',
    },
    {
      bookName: 'Effective Java',
      bookPic:
        'http://books.google.com/books/content?id=ka2VUBqHiWkC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
      publisher: 'Addison-Wesley Professional',
      publishDate: '2008-05-08',
      description:
        'Are you looking for a deeper understanding of the Java programming language so that you can write code that is clearer, more correct, more robust, and more reusable?',
    },
  ];

  baseUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
  bookSubject$ = new Subject<expectBook[]>();
  wishList: string[] = [];
  wishListSubject = new Subject<string[]>();
  // wishListSubject = new BehaviorSubject<string[]>(this.wishList);

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
    if (!this.wishList.includes(book.bookName)) {
      this.wishList = [book.bookName, ...this.wishList];
      this.wishListSubject.next(this.wishList);
    }
  }

  removeFromWishList(bookName: string) {
    // console.log('Before removal:', this.wishList);
    if (this.wishList.includes(bookName)) {
      this.wishList = this.wishList.filter((name) => name !== bookName);
      this.wishListSubject.next(this.wishList);
      // console.log('After removal:', this.wishList);
    }
  }
}

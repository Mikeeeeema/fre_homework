import { Component, OnDestroy, OnInit } from '@angular/core';
import { from, interval, map, Observable, of, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-rxjs-into',
  standalone: false,

  templateUrl: './rxjs-into.component.html',
  styleUrl: './rxjs-into.component.css',
})
export class RxjsIntoComponent implements OnInit, OnDestroy {
  subscription = new Subscription();

  ngOnInit(): void {
    // const observable = new Observable((subscriber) => {
    //   subscriber.next(1);
    //   subscriber.next(2);
    //   subscriber.next(3);
    //   setTimeout(() => {
    //     subscriber.next(4);
    //     subscriber.complete();
    //   }, 1000);
    // });

    // observable.subscribe((n) => console.log(n));
    // this.subscription = of(1, 2, 3, 4, 5).subscribe(console.log);
    // from([[1, 2, 3, 4], 2, 3, 4]).subscribe(console.log);

    // this.subscription = interval(500).subscribe((n) => {
    //   console.log(n);
    // });
    const interval$ = interval(500).pipe(
      map((v) => v * 2),
      take(10)
    );

    interval$.subscribe((n) => {
      console.log(n);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

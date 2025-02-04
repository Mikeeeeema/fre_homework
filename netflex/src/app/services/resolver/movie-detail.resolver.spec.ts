// import { TestBed } from '@angular/core/testing';
// import { ResolveFn } from '@angular/router';

// import { MovieDetailResolver } from './movie-detail.resolver';

// describe('movieDetailResolver', () => {
//   const executeResolver: ResolveFn<boolean> = (...resolverParameters) =>
//     TestBed.runInInjectionContext(() =>
//       MovieDetailResolver(...resolverParameters)
//     );

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//   });

//   it('should be created', () => {
//     expect(executeResolver).toBeTruthy();
//   });
// });

import { TestBed } from '@angular/core/testing';

import { MovieDetailResolver } from './movie-detail.resolver';

describe('MovieDetailsResolverService', () => {
  let service: MovieDetailResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieDetailResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

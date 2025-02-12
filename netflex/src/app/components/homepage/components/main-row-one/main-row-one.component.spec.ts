import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainRowOneComponent } from './main-row-one.component';

describe('MainRowOneComponent', () => {
  let component: MainRowOneComponent;
  let fixture: ComponentFixture<MainRowOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainRowOneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainRowOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

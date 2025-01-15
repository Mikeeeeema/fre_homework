import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainRowThreeComponent } from './main-row-three.component';

describe('MainRowThreeComponent', () => {
  let component: MainRowThreeComponent;
  let fixture: ComponentFixture<MainRowThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainRowThreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainRowThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

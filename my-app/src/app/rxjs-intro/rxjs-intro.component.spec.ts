import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsIntroComponent } from './rxjs-intro.component';

describe('RxjsIntroComponent', () => {
  let component: RxjsIntroComponent;
  let fixture: ComponentFixture<RxjsIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RxjsIntroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

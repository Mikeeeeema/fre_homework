import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeTitleCardComponent } from './change-title-card.component';

describe('ChangeTitleCardComponent', () => {
  let component: ChangeTitleCardComponent;
  let fixture: ComponentFixture<ChangeTitleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChangeTitleCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeTitleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

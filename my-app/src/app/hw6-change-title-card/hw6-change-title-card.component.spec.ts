import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hw6ChangeTitleCardComponent } from './hw6-change-title-card.component';

describe('Hw6ChangeTitleCardComponent', () => {
  let component: Hw6ChangeTitleCardComponent;
  let fixture: ComponentFixture<Hw6ChangeTitleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Hw6ChangeTitleCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hw6ChangeTitleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

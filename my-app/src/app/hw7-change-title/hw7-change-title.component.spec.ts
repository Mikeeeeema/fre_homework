import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hw7ChangeTitleComponent } from './hw7-change-title.component';

describe('Hw7ChangeTitleComponent', () => {
  let component: Hw7ChangeTitleComponent;
  let fixture: ComponentFixture<Hw7ChangeTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Hw7ChangeTitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hw7ChangeTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

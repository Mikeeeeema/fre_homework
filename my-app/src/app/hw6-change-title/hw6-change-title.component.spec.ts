import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hw6ChangeTitleComponent } from './hw6-change-title.component';

describe('Hw6ChangeTitleComponent', () => {
  let component: Hw6ChangeTitleComponent;
  let fixture: ComponentFixture<Hw6ChangeTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Hw6ChangeTitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hw6ChangeTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

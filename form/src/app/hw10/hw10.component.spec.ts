import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hw10Component } from './hw10.component';

describe('Hw10Component', () => {
  let component: Hw10Component;
  let fixture: ComponentFixture<Hw10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Hw10Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hw10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

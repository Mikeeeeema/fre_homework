import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoivelistComponent } from './moivelist.component';

describe('MoivelistComponent', () => {
  let component: MoivelistComponent;
  let fixture: ComponentFixture<MoivelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoivelistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoivelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumitemComponent } from './albumitem.component';

describe('AlbumitemComponent', () => {
  let component: AlbumitemComponent;
  let fixture: ComponentFixture<AlbumitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlbumitemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

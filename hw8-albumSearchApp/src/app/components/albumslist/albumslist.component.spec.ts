import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumslistComponent } from './albumslist.component';

describe('AlbumslistComponent', () => {
  let component: AlbumslistComponent;
  let fixture: ComponentFixture<AlbumslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlbumslistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
